

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

##  Screenshots

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
![Home Page]<img width="1810" height="1409" alt="Screenshot 2026-08-14 015209" src="https://github.com/user-attachments/assets/47f3fe6e-b0de-419d-b6d4-aeacdb851d7c" />

![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
#[Uploading Screenshot 2026-08-14 015140.png…]()
#[Application Page] <img width="1479" height="1447" alt="Screenshot 2026-08-14 020752" src="https://github.com/user-attachments/assets/5ba19585-d312-4eef-96a6-172382f73d17" />

```

##  Learning Outcomes

<img width="2287" height="1278" alt="Screenshot 2026-08-14 014915" src="https://github.com/user-attachments/assets/23131e8a-18d0-4709-ad58-f2da89833408" />

<img width="1794" height="1452" alt="Screenshot 2026-08-14 015008" src="https://github.com/user-attachments/assets/0ab4e0b8-7fe9-4d15-baed-c1cf97d1b5ac" />

<img width="1479" height="1447" alt="Screenshot 2026-08-14 020752" src="https://github.com/user-attachments/assets/4a3193eb-e2ce-4e18-b751-a066305ecfca" />

<img width="1824" height="1456" alt="Screenshot 2026-08-14 015140" src="https://github.com/user-attachments/assets/7f75fde7-2bfb-4162-9e7d-330b9f48e8d7" />

<img width="1792" height="1239" alt="Screenshot 2026-08-14 020552" src="https://github.com/user-attachments/assets/69fe5b93-a6a5-4423-803a-dc95e7baa583" />

<img width="1810" height="1409" alt="Screenshot 2026-08-14 015209" src="https://github.com/user-attachments/assets/f260ee93-b71f-4811-ae06-4916f9ff8405" />

<img width="1889" height="1547" alt="Screenshot 2026-08-14 015052" src="https://github.com/user-attachments/assets/3c384062-568d-41c6-b089-49f8e5336bd9" />


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

## Future Enhancements

* Advanced job search and filtering
* Job application tracking
* Recruiter/Admin panel
* Email notifications
* Job recommendations
* Online interview scheduling
* Application status tracking

##  Developer

**Simran Tripathi**

MCA | Chandigarh University

## ⭐ Acknowledgement

This project was developed as part of academic/project work to demonstrate full-stack web development skills using the MERN stack.
