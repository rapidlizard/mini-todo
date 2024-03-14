import { User } from "../User";

let users: User[] = []

export function createUser (email: string, password: string): User | undefined{
  const newId = users.length + 1

  users.push({
    id: newId,
    email: email,
    password: password
  });

  return users.find(user => user.id === newId)
}

export function getUser (id: number): User | undefined{
  return users.find(user => user.id === id);
}