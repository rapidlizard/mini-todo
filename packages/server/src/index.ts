import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createUser, getUser } from './services/UserService';
import { createSessionForUser, getSession } from './services/SessionService';
import cookieParser from 'cookie-parser'

const app = express();
const PORT = 8080;
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/auth/user', (req, res) => {
  const session = getSession(req.cookies.session);
  
  if (!session) {
    res.sendStatus(404);
  } else {
    const user = getUser(session.userId);

    res.send(JSON.stringify({id: user?.id, email: user?.email}));
  }
});

app.post('/auth/register', (req, res) => {
  const newUser = createUser(req.body.email, req.body.password);

  const newSession = createSessionForUser(newUser.id);

  res.setHeader('Content-Type', 'application/json');
  res.cookie('session', newSession.id);
  res.send(JSON.stringify({id: newUser?.id, email: newUser?.email}));
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});