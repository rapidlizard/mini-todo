import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createUser, getUserByEmail, getUserById } from './services/UserService';
import { createSessionForUser, deleteSession, getSession } from './services/SessionService';
import cookieParser from 'cookie-parser'
import { createTask, getTasks } from './services/TaskService';

const app = express();
const PORT = 8080;
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/auth/user', (req, res) => {
  if (!req.cookies.session) {
    res.sendStatus(404);
  } 

  const session = getSession(req.cookies.session);
  
  if (!session) {
    res.clearCookie('session');
  } else {
    const user = getUserById(session.userId);

    res.send(JSON.stringify({id: user?.id, email: user?.email}));
  }
});

app.post('/auth/login', (req, res) => {
  const user = getUserByEmail(req.body.email);

  if(!user) {
    res.sendStatus(404)
  } else if (user.password !== req.body.password) {
    res.sendStatus(401)
  } else {
    const newSession = createSessionForUser(user.id);

    res.setHeader('Content-Type', 'application/json');
    res.cookie('session', newSession.id);
    res.send(JSON.stringify({id: user?.id, email: user?.email}));
  }
})

app.post('/auth/register', (req, res) => {
  const newUser = createUser(req.body.email, req.body.password);

  const newSession = createSessionForUser(newUser.id);

  res.setHeader('Content-Type', 'application/json');
  res.cookie('session', newSession.id);
  res.send(JSON.stringify({id: newUser?.id, email: newUser?.email}));
})

app.delete('/auth/logout', (req, res) => {
  deleteSession(req.cookies.id);

  res.clearCookie('session');
  res.sendStatus(200);
})

app.get('/tasks', (req, res) => {
  const tasks = getTasks();

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(tasks));
})

app.post('/task', (req, res) => {
  const newTask = createTask(req.body.title);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(newTask));
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});