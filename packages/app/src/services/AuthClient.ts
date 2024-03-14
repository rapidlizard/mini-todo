import User from "../types/User";
import { API_BASE_URL } from "./constants";

export async function registerUser  (email: string, password: string): Promise<User> {
  const user = {email, password};

  const response = await fetch(API_BASE_URL + '/auth/register', {method: 'POST', body: JSON.stringify(user), headers: {
      "Content-Type": "application/json",
    }});

  const body = await response.json();

  return body as User;
}