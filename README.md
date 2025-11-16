# 🌱 Vasundhara Agro -- Full Stack Application

A full-stack web application built with **React (frontend)** and
**Node.js + Express + MySQL (backend)**.\
Features include:

-   User Register & Login 
-   Profile Management
-   Product Page (after login)
-   Responsive UI
-   MySQL Database Integration

------------------------------------------------------------------------

## 🚀 Tech Stack

### **Frontend**

-   React
-   Axios
-   React Router
-   CSS / Responsive Design

### **Backend**

-   Node.js
-   Express.js
-   MySQL2
-   bcryptjs
-   CORS enabled

------------------------------------------------------------------------

## 📦 Project Structure

    project/
    │── backend/
    │   ├── server.js
    │   ├── routes/
    │   ├── controllers/
    │   ├── models/
    │   ├── .env
    │── frontend/
    │   ├── src/
    │   ├── public/
    │   ├── package.json
    │── README.md

------------------------------------------------------------------------

# 🛠 Setup Instructions

## 1️⃣ Clone the Repository

``` bash
git clone <https://github.com/Sad2002/vasundhara-agro.git>
cd project
```

------------------------------------------------------------------------

# 🗄 Backend Setup (Node + MySQL)

Go inside backend folder:

``` bash
cd backend
npm install
```

### **Create `.env` file**

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=vasundhara_db
    

### **Start backend**

``` bash
node server.js
```

Backend runs at:

    http://localhost:5000

------------------------------------------------------------------------

# 🗃 MySQL Database Setup

### Create database:

``` sql
CREATE DATABASE vasundhara_db;
USE vasundhara_db;
```

### Create users table:

``` sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  contact VARCHAR(20),
  password VARCHAR(255),
  role VARCHAR(20) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

------------------------------------------------------------------------

# 💻 Frontend Setup (React)

Go inside frontend folder:

``` bash
cd frontend
npm install
npm start
```

Frontend runs at:

    http://localhost:3000

------------------------------------------------------------------------

# 🔗 API Endpoints

### **Register**

    POST /auth/register

### **Login**

    POST /auth/login

### **Get Profile**

    GET /auth/profile
    

------------------------------------------------------------------------

# ✔ Features Working

-   ✔ Register new user\
-   ✔ Login with validation\
-   ✔ Protected pages (Profile, Product)\
-   ✔ Logout\
-   ✔ Responsive Navigation

------------------------------------------------------------------------

Screenshots

### 🏠 Homepage
![Homepage](https://raw.githubusercontent.com/Sad2002/vasundhara-agro/main/screenshots/home.png)


# 📄 License

This project is for learning & development use.

------------------------------------------------------------------------

# 👩‍💻 Author

**Vasundhara Agro Project**\
Developed with using MERN + MySQL.
