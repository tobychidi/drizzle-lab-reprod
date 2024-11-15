import { index, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);
export const roleEnum = pgEnum('role', ['admin', 'user', 'guest']);

export const users = pgTable('users', {
  id: serial().primaryKey(),
  username: text().notNull().unique(),
  email: text().notNull().unique(),
  role: roleEnum().default('user').notNull(),
  status: statusEnum().default('active').notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
}, table => [index("user_id_idx").on(table.id)]);
