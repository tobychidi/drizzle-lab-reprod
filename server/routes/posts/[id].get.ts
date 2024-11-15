import { eq } from 'drizzle-orm';
import { db, posts } from '../../../db';

export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const post = await db.select().from(posts).where(eq(posts.id, parseInt(id)));
  return post[0];
});
