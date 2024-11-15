import { H3Event } from 'h3';
import { db, posts } from '../../../db';

export default eventHandler(async (event: H3Event) => {
  const allPosts = await db.select().from(posts);
  return allPosts;
});
