# ConnectSphere

🚀 ConnectSphere is a modern social media application built with the MERN stack to provide a smooth, secure, and user-friendly platform for creating, managing, and sharing posts. The project combines a responsive frontend experience with a robust backend architecture, making it a strong example of a full-stack web application that supports real-world user interaction.

## 1. Project Brief and Objectives

ConnectSphere was designed as a complete social networking experience where users can register, log in, create posts, update their profiles, and manage their content in a polished interface. The primary objective of the project is to demonstrate how a modern web application can bring together authentication, data persistence, protected routing, and interface design into a single, cohesive platform.

The project aims to:

- Create a secure and intuitive user experience for social interactions.
- Showcase how frontend and backend components can work seamlessly together.
- Demonstrate the use of modern JavaScript technologies in a production-style architecture.
- Provide a foundation for future enhancements such as comments, likes, followers, and notifications.

## 2. Specific Goals and Expected Outcomes

The core goals of ConnectSphere are to deliver a platform that is:

- Easy to use for both new and returning users.
- Secure in handling user accounts and personal data.
- Fast and responsive across different screen sizes.
- Modular and scalable for future feature expansion.

Expected outcomes include:

- A working authentication flow for registration and login.
- A protected dashboard where users can access their content safely.
- Full CRUD support for posts with proper ownership validation.
- A clean user interface that feels modern and approachable.
- A well-organized codebase that can be extended with additional social features.

## 3. Services Used and How They Work Together

### 🧩 Services

- Frontend: React + Vite for building the user interface and managing page navigation.
- Backend: Node.js and Express for API creation and request handling.
- Database: MongoDB with Mongoose for storing users and posts.
- Authentication: JSON Web Tokens (JWT) and bcrypt for secure login and password protection.
- Security Middleware: Helmet, CORS, rate limiting, and cookie parsing to enhance safety.
- Styling: Tailwind CSS and Material UI for a polished and responsive layout.

### 🔄 Interaction Between Services

The frontend sends requests to the Express backend, which validates the request, checks authentication, and interacts with MongoDB through Mongoose models. When a user logs in, the backend generates a JWT token, which the frontend stores and uses for subsequent protected requests. The server then validates the token before allowing access to sensitive routes such as profile management and post editing.

## 4. Features and Key Services

### ✨ Important Features

- User registration and login experience.
- Protected routes that prevent unauthorized access.
- Profile management for updating personal information and bio.
- Post creation, editing, viewing, and deletion.
- Responsive interface with dedicated pages for home, profile, create post, settings, and error handling.
- Modern visual design with reusable components and layout structures.

### 🛠️ Key Services and Their Significance

- Authentication service: Handles login, registration, and token-based session validation.
- Post service: Manages post-related API requests and keeps the app connected to the backend.
- Auth context: Maintains the login state across components and pages.
- Theme context: Supports design consistency and future UI customization.
- Layout and component structure: Helps keep the user experience modular and maintainable.

## 5. Problems Encountered and Their Resolutions

### Problem 1: Securing User Access

One of the biggest challenges in building this project was ensuring that only authenticated users could access private parts of the application. Without proper protection, users could potentially access restricted pages or manipulate data without authorization.

Resolution:
- Protected routes were implemented in the frontend.
- JWT-based authentication was added to validate user sessions.
- Backend middleware checks user identity before allowing access to sensitive features.

### Problem 2: Preventing Unauthorized Content Editing

Another challenge was protecting user-generated content so that one user could not edit or delete another person’s post. This is essential in any social platform.

Resolution:
- The backend compares the authenticated user ID with the owner ID of a post before allowing updates or deletion.
- Clear error responses such as 403 Forbidden are returned when unauthorized access is attempted.

## 6. Authentication and Data Protection

### 🔐 Authentication Steps

1. A user registers by entering personal details and a strong password.
2. The server validates the input and hashes the password before saving it.
3. If the credentials are valid, the backend generates a JWT token.
4. The frontend uses that token to maintain the authenticated session.
5. Protected routes and API endpoints verify the token before allowing access.

### 🛡️ Data Protection Measures

- Passwords are never stored in plain text; they are hashed with bcrypt.
- Sensitive routes are guarded by authentication middleware.
- Input validation is implemented for registration, login, and post creation.
- Security headers and request limiting are enabled through Helmet and rate limiting middleware.
- CORS is configured to reduce exposure to unauthorized requests.

## 7. Technical Insights Learned

This project provided valuable technical learning in several areas:

- Building a full-stack application with separate frontend and backend folders.
- Implementing secure authentication using JWT and password hashing.
- Managing state and user sessions in React using context providers.
- Connecting a React application to a RESTful API built with Express.
- Working with MongoDB and Mongoose for structured data modeling.
- Organizing routes, controllers, and middleware in a scalable structure.

## 8. Process Insights and Collaboration Learnings

Beyond technical development, the project also reinforced the importance of clean planning and structured implementation. Good architecture decisions such as separating concerns, keeping API logic in controllers, and using reusable UI components significantly improved maintainability. The process highlighted how clear communication between frontend and backend responsibilities can prevent confusion and accelerate development.

## 9. Screen Captures and Their Context

📸 Screen captures are an important part of presenting the project visually. The following areas are ideal for showcasing the application:

- Landing Page: Displays the first impression of ConnectSphere, including the brand identity and entry points for sign-up or login.
- Authentication Screens: Show the registration and login experience, emphasizing the user-friendly flow.
- Home Feed: Presents the main social experience where users can view posts and engage with the platform.
- Profile Page: Highlights user profile management and personal content visibility.
- Create/Edit Post Experience: Demonstrates how users can add and update their posts.

Suggested next step: add actual screenshots to a screenshots folder and reference them below for a more visual presentation.
## 10. Video Link

https://drive.google.com/file/d/1o8pGuSUtDB9yEg6jAyJoDM4SuNruBQPu/view?usp=sharing


## 11. Improvements and Future Enhancements

🌱 There is significant room to grow this project into a richer social platform. Potential improvements include:

- Adding likes and comments to posts.
- Introducing follow and friend systems.
- Adding notifications and real-time chat.
- Supporting image uploads and media galleries.
- Improving the user profile experience with avatars and richer social details.
- Adding dark mode and theme customization.
- Expanding admin and moderation tools.

## 12. Next Steps

The next phase of ConnectSphere could focus on turning it into a more complete social network by introducing engagement features, stronger real-time capabilities, and a more advanced profile experience. The current version provides a strong foundation, and the architecture is ready for future expansion.

## 13. Installation and Run Instructions

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment

Create a .env file inside the Backend folder with the following values:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/connectsphere
JWT_SECRET=connectsphere-super-secret-key
NODE_ENV=development
```

### 3. Start MongoDB

Make sure MongoDB is running locally on port 27017.

### 4. Run the application

```bash
npm run dev
```

This will start the backend and frontend together.

## 14. Project Structure

```text
MERN_STACK/
  Backend/
    config/
    controllers/
    middleware/
    models/
    routes/
    utils/
    server.js
  Frontend/
    src/
      components/
      context/
      mocks/
      pages/
      services/
      App.jsx
      main.jsx
      styles.css
```

## 15. API Overview

### Auth Routes
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile
- PUT /api/auth/profile
- DELETE /api/auth/delete

### Post Routes
- POST /api/posts
- GET /api/posts
- GET /api/posts/:id
- PUT /api/posts/:id
- DELETE /api/posts/:id

### User Routes
- GET /api/users
- GET /api/users/:id
- GET /api/users/search

## 16. Questions

💬 If you would like to learn more about ConnectSphere, explore the codebase, or discuss future enhancements, feel free to ask questions and share feedback.
