import { pgEnum, pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { statusEnum } from './users';

export const postCategoryEnum = pgEnum('post_category', ['news', 'tutorial', 'review', 'other']);

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  authorId: integer('author_id').notNull(),
  status: statusEnum('status').default('active').notNull(),
  category: postCategoryEnum('category').default('other').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
