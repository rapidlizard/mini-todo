import { API_BASE_URL } from "./constants";

export async function registerUser  (email: string, password: string) {
    const user = {email, password}

    const response = await fetch(API_BASE_URL + '/auth/register', {method: 'POST', body: JSON.stringify(user), headers: {
        "Content-Type": "application/json",
      }});

  
}