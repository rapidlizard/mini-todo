import express from 'express';
import cors from 'cors'
import { User } from './User';
import bodyParser from 'body-parser';
import { createUser } from './services/UserService';

const app = express();
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send();
});

app.post('/auth/register', (req, res) => {
  const newUser = createUser(req.body.email, req.body.password);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({id: newUser?.id, email: newUser?.email}));
})



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});