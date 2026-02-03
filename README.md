 HEAD
# Frontend Developer Intern Assignment

Full-stack authentication + dashboard app built with React and Node.

---

## Tech Stack

Frontend:
- React (Create React App)
- TailwindCSS
- Axios
- React Router

Backend:
- Node.js
- Express
- MongoDB (local)
- JWT Authentication
- bcrypt

---

## Features

- Signup + Login
- Password hashing
- JWT protected routes
- User profile
- Tasks CRUD (Create / Read / Update / Delete)
- Search tasks
- Client + server validation
- Loading states
- Responsive UI

---

## Setup Instructions

### Backend

```bash
cd backend
npm install


Create .env:

PORT=5000
JWT_SECRET=your_secret
MONGO_URI=mongodb://127.0.0.1:27017/intern


Run backend:

npm run dev

Frontend
cd frontend
npm install
npm start


App runs on:

http://localhost:3000

Demo Credentials

Create via signup page:

http://localhost:3000/signup

# intern-assignment
f1087b410731ff74d365fbe0d7ab5a63714becd4
