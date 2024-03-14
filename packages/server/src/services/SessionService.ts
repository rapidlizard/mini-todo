import { Session } from "../types/Session";

let sessions: Session[] = [];

export function createSessionForUser (userId: number): Session {
  const newSession = {
    id: 'sessionId' + sessions.length,
    userId: userId
  }

  sessions.push(newSession);

  return newSession;
}

export function getSession(id: string): Session | undefined {
  return sessions.find(session => session.id === id);
}
