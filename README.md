# ConnectSphere

ConnectSphere is a modern social media platform built with React, Node.js, Express, MongoDB, and JWT authentication.

## Features

- User auth with register/login/logout
- Protected routes and JWT-based session persistence
- Profile management with bio and avatar support
- Create, edit, delete, and view posts
- Responsive dashboard with feed, sidebar, profile card, and activity area
- Modern UI inspired by current social platforms

## Tech Stack

- Frontend: React, React Router, Axios, CSS
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Project Structure

```text
social-media-app/
  client/
    src/
      components/
      pages/
      context/
      services/
      styles.css
      App.jsx
      main.jsx
  server/
    controllers/
    routes/
    middleware/
    models/
    config/
    utils/
    uploads/
    server.js
```

## Installation

### 1. Install dependencies

```bash
cd Backend && npm install
cd ../Frontend && npm install
```

### 2. Configure environment

Create a `.env` file in the Backend folder with:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/connectsphere
JWT_SECRET=connectsphere-super-secret-key
NODE_ENV=development
```

### 3. Start MongoDB

Make sure MongoDB is running locally on port 27017.

### 4. Run the app

```bash
cd Backend && npm run dev
cd Frontend && npm run dev
```

The frontend will run on http://localhost:3000 and the backend on http://localhost:5000.

## API Overview

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile
- PUT /api/auth/profile
- DELETE /api/auth/delete

### Posts
- POST /api/posts
- GET /api/posts
- GET /api/posts/:id
- PUT /api/posts/:id
- DELETE /api/posts/:id

### Users
- GET /api/users
- GET /api/users/:id
- GET /api/users/search

## Future-ready extensions

The codebase is structured to support later additions such as likes, comments, follow/friend systems, notifications, stories, chats, dark mode, and admin features.
