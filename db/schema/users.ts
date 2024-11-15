import { pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);
export const roleEnum = pgEnum('role', ['admin', 'user', 'guest']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  role: roleEnum('role').default('user').notNull(),
  status: statusEnum('status').default('active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
