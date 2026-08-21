

A full-stack **Job Portal Web Application** developed using React.js, Node.js, Express.js, and MongoDB. The platform allows users to register, login, manage their profiles, upload resumes, search for jobs, and interact with job-related features.

##  Features

*  User Registration & Login
*  User Profile Management
*  Browse and Search Jobs
*  Resume Upload
*  Resume Preview
*  Resume Download
*  JWT-based Authentication
*  Password Encryption
*  User Dashboard
*  Responsive User Interface
*  REST API Integration
*  use for better opportunite
  

##  Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* Axios
* React Router

### Backend

* Node.js
* Express.js
* REST API
* JWT Authentication
* Multer
* bcryptjs
* API TESTING

### Database

* MongoDB
* Mongoose

### Tools

* Visual Studio Code
* Git & GitHub
* Postman
* npm

##  Project Structure

```text
Job-Portal/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   │   ├── profile/
│   │   └── resumes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Job-Portal
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start Backend Server

Inside the `server` folder:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

### 6. Start Frontend

Inside the `client` folder:

```bash
npm run dev
```

The frontend will run on the Vite URL shown in the terminal, for example:

```text
http://localhost:5176
```

##  Authentication

The application uses **JWT (JSON Web Token)** for secure user authentication.

Passwords are encrypted using **bcryptjs** before being stored in the database.

##  Resume Management

Users can:

1. Upload their resume in PDF format.
2. Preview the uploaded resume.
3. Download their resume.
4. Manage their profile information.

##  API Modules

The backend provides REST APIs for:

* User Authentication
* Registration
* Login
* Profile Management
* Resume Upload
* Resume Download
* Job Management

## 📸 Screenshots

Add screenshots of your project here:

```text
Home Page
Login Page
Register Page
Jobs Page
Dashboard
Profile Page
Resume Upload Page
Resume Preview
```

Example:

```markdown
![Home Page](screenshots/home.png)
![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
#[Uploading Screenshot 2026-08-14 015140.png…]()

```

##  Learning Outcomes
<img width="1824" height="1456" alt="Screenshot 2026-08-14 015140" src="https://github.com/user-attachments/assets/7f75fde7-2bfb-4162-9e7d-330b9f48e8d7" />


Through this project, I learned:

* Full-stack web application development
* React component development
* REST API creation
* Node.js and Express.js
* MongoDB database integration
* JWT authentication
* Password hashing
* File upload using Multer
* Frontend-backend integration using Axios
* Git and GitHub project management

## 🔮 Future Enhancements

* Advanced job search and filtering
* Job application tracking
* Recruiter/Admin panel
* Email notifications
* Job recommendations
* Online interview scheduling
* Application status tracking

## 👩‍💻 Developer

**Simran Tripathi**

MCA | Chandigarh University

## ⭐ Acknowledgement

This project was developed as part of academic/project work to demonstrate full-stack web development skills using the MERN stack.
