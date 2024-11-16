import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  index,
} from "drizzle-orm/pg-core";
import { statusEnum, users } from ".";

export const postCategoryEnum = pgEnum("post_category", [
  "news",
  "tutorial",
  "review",
  "other",
]);

export const posts = pgTable(
  "posts",
  {
    id: serial().primaryKey(),
    title: text().notNull(), //previously text("title").notNull(),
    content: text().notNull(),
    authorId: integer()
      .references(() => users.id)
      .notNull(),
    status: statusEnum().default("active").notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
  },
  (table) => [
    index("author_idx").on(table.authorId),
    index("post_status_idx").on(table.status),
  ]
);
