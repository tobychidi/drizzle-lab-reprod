# Drizzle Lab Project

A TypeScript-based project using Drizzle ORM for database operations with PostgreSQL.

## Features

- PostgreSQL database with Drizzle ORM
- Type-safe database operations
- RESTful API endpoints for Posts and Users
- Role-based user system
- Post categories and status management

## Database Schema

### Users
- Fields: id, username, email, role (admin/user/guest), status, timestamps
- Indexed fields for optimized queries
- Built-in role and status management

### Posts
- Fields: id, title, content, authorId, status, timestamps
- Categories: news, tutorial, review, other
- Foreign key relationship with Users
- Indexed fields for better performance

## API Endpoints

### Posts
- `GET /`: Get all posts
- `POST /`: Create a new post
- `GET /:id`: Get post by ID

### Users
- `GET /users`: Get all users
- `POST /users`: Create a new user

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your PostgreSQL database
4. Configure your database connection in `drizzle.config.ts`
5. Run migrations:
   ```bash
   npm run db:migrate
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies

- TypeScript
- Drizzle ORM
- PostgreSQL
- Nitro
