import { H3Event } from 'h3';
import { db, users } from '../../../db';

export default eventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const newUser = await db.insert(users).values(body).returning();
  return newUser[0];
});
