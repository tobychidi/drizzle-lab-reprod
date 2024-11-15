import { eq } from 'drizzle-orm';
import { db, posts } from '../../../db';

export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const body = await readBody(event);
  
  const updatedPost = await db
    .update(posts)
    .set(body)
    .where(eq(posts.id, parseInt(id)))
    .returning();
    
  return updatedPost[0];
});
