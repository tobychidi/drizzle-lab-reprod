import { H3Event } from 'h3';
import { db, users } from '../../../db';

export default eventHandler(async (event: H3Event) => {
  const allUsers = await db.select().from(users);
  return allUsers;
});
