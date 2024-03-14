import { User } from "../types/User";

let users: User[] = []

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

export function getUser (id: number): User | undefined{
  return users.find(user => user.id === id);
}