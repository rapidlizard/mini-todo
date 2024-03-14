import { Session } from "../types/Session";

let sessions: Session[] = [];

export function createSessionForUser (userId: number): Session {
  const newSession = {
    id: '' + sessions.length + 1,
    userId: userId
  }

  sessions.push(newSession);

  return newSession;
}

export function getSession(id: string): Session | undefined {
  return sessions.find(session => session.id === id);
}

export function deleteSession(id: string) {
  const newSessionsArray = sessions.filter((session) => session.id === id);

  sessions = newSessionsArray;
}
