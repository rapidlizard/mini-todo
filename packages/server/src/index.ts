import express from 'express';
import cors from 'cors'
import { User } from './User';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;
app.use(cors())
app.use(bodyParser.json())

let users: User[] = []

app.get('/', (req, res) => {
  res.send(users);
});

app.post('/auth/register', (req, res) => {
  users.push({
    id: users.length + 1,
    ...req.body
  })

  console.log(req.body)

  res.send(200)
})



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});