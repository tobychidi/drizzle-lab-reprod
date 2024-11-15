import { H3Event } from 'h3';
import { db, posts } from '../../../db';

export default eventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const newPost = await db.insert(posts).values(body).returning();
  return newPost[0];
});
