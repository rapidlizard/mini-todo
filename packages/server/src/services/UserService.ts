import { User } from "../types/User";

let users: User[] = [
  {
    id: 1,
    email: 'plove@email.com',
    password: '123'
  }
]

export function createUser (email: string, password: string): User {
  const newUser = {
    id: users.length + 1,
    email: email,
    password: password
  }

  users.push(newUser);

  console.log(users)

  return newUser;
}

export function getUserById (id: number): User | undefined{
  return users.find(user => user.id === id);
}

export function getUserByEmail (email: string): User | undefined{
  return users.find(user => user.email === email);
}