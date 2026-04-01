# 💼 FinTrack Pro – Finance Analytics Backend

## 🚀 Overview

FinTrack Pro is a backend system designed to manage financial records with role-based access control and provide analytics for a finance dashboard.

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

## 🔐 Features

* User authentication (Register/Login)
* Role-based access control (Admin, Analyst, Viewer)
* Financial record management (CRUD)
* Filtering & soft delete
* Dashboard analytics:

  * Total income & expenses
  * Net balance
  * Category-wise breakdown

## 📡 API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Records

* POST /api/records (Admin only)
* GET /api/records (All roles)
* PUT /api/records/:id (Admin)
* DELETE /api/records/:id (Admin)

### Dashboard

* GET /api/dashboard/summary (Admin, Analyst)
* GET /api/dashboard/categories (Admin, Analyst)

## 🔐 Roles & Permissions

| Role    | Permissions      |
| ------- | ---------------- |
| Viewer  | View records     |
| Analyst | View + analytics |
| Admin   | Full access      |

## ⚙️ Setup Instructions

```bash
git clone <repo-link>
cd fintrack-pro-backend
npm install
npm run dev
```

## 📌 Environment Variables

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

## ✨ Future Improvements

* Pagination
* Search functionality
* API documentation (Swagger)
* Deployment
