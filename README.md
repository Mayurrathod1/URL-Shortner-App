# URL Shortener App (MERN)

This is a **MERN stack** (MongoDB, Express.js, React.js, Node.js) based **URL Shortener** application that allows users to shorten long URLs into short and easy-to-share links.

---

## Features

- Shorten long URLs  
- Custom short link generation   
- Responsive UI for better user experience  
- RESTful API for backend functionality  

---

## Tech Stack

- **Frontend**: React.js, Axios, Bootstrap (or Tailwind CSS)  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Database**: MongoDB (local or cloud-based like MongoDB Atlas)  
- **Other**: JWT Authentication

---

## Project Structure

```
/URL-Shortner-App
│── client-app/       # Frontend (React.js)
│── server-app/       # Backend (Node.js, Express)
│── README.md         # Project Documentation
```

---

## Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Mayurrathod1/URL-Shortner-App.git
cd URL-Shortner-App
```

### 2️. Install Dependencies

#### **Backend (server-app)**
```bash
cd server-app
npm install
```

#### **Frontend (client-app)**
```bash
cd ../client-app
npm install
```

### 3️. Configure Environment Variables
Create a `.env` file inside the `server-app` directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
BASE_URL=http://localhost:5000
```

### 4️. Start the Application

#### **Backend**
```bash
cd server-app
npm start
```

#### **Frontend**
```bash
cd ../client-app
npm start
```

---

## API Endpoints (Backend)

| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| POST   | `/api/url/shorten`  | Shorten a long URL             |
| GET    | `/:shortCode`       | Redirect to original URL       |
| GET    | `/api/url/stats`    | Get stats for a short URL      |
