# 🏦 Finance Data Processing & Access Control Backend

## 🚀 Overview
This project is a backend system for a finance dashboard that manages financial records, user roles, and access control.
It demonstrates strong backend engineering concepts including API design, data modeling, authentication, authorization, and data aggregation for analytics.

## 🛠 Tech Stack
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JSON Web Token (JWT) Authentication  

## 🧠 Architecture & Design
The application follows a modular and scalable structure:
controllers/ → Business logic
models/ → Database schemas
routes/ → API endpoints
middleware/ → Authentication & authorization
config/ → Database connection

### Design Highlights
- Separation of concerns (clean architecture)
- Role-based middleware for access control
- Aggregation pipelines for analytics
- Scalable and maintainable code structure

## 👤 User Roles & Permissions

| Role     | Description |
|----------|------------|
| Viewer   | Can only view records |
| Analyst  | Can view records and access dashboard analytics |
| Admin    | Full access (create, update, delete records & manage users) |

## 💰 Financial Records

Each financial record contains:
- Amount  
- Type (Income / Expense)  
- Category  
- Date  
- Note / Description  

## 📊 Dashboard Features
The backend provides aggregated financial insights:
- Total Income  
- Total Expenses  
- Net Balance  
- Category-wise totals  
- Summary analytics using aggregation  

## 🔐 Access Control
Role-based access control is implemented using middleware.

| Action | Viewer | Analyst | Admin |
|--------|--------|--------|--------|
| View Records | ✅ | ✅ | ✅ |
| Create Record | ❌ | ❌ | ✅ |
| Update Record | ❌ | ❌ | ✅ |
| Delete Record | ❌ | ❌ | ✅ |
| Dashboard Access | ❌ | ✅ | ✅ |

## ⚠️ Validation & Error Handling

- Input validation for required fields  
- Proper HTTP status codes (400, 401, 403, 500)  
- Meaningful error messages  
- Protection against invalid operations  

## 💾 Data Persistence

- MongoDB used as the database  
- Mongoose used for schema modeling and validation  

## 🔧 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/YOUR-USERNAME/finance-backend.git
cd finance-backend

2. Install Dependencies
npm install

3. Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=mySecretKey123
PORT=5000

4. Run the Server
npm start

Server will run at:
http://localhost:5000
📌 API Endpoints

🔐 1. Register User

POST
http://localhost:5000/api/auth/register

Body (JSON):
{
  "name": "Sujatha",
  "email": "sujatha@gmail.com",
  "password": "123456",
  "role": "admin"
}
🔑 2. Login (Get Token)

POST
http://localhost:5000/api/auth/login

Body:
{
  "email": "sujatha@gmail.com",
  "password": "123456"
}
👉 Copy the token from response(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2RmNzdmZmY0ZWQ1ODVjYTVhZjk0YyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NTEwNTk2N30.eGZaVVQMlK3K-lRRMvXcsY2TOHc6gUeUvqbj4mfJTIU)

💰 3. Create Record

POST
http://localhost:5000/api/records
Header:
Authorization: Bearer <your_token>
Body:

{
  "amount": 5000,
  "type": "income",
  "category": "Salary",
  "date": "2026-04-02",
  "note": "April salary"
}

📊 4. Get Records

GET
http://localhost:5000/api/records
Header:
Authorization: Bearer <your_token>
📈 5. Dashboard Summary

GET
http://localhost:5000/api/dashboard
Header:
Authorization: Bearer <your_token>
✅ Output Example
{
  "totalIncome": 5000,
  "totalExpense": 0,
  "netBalance": 5000
}

🔐 Authentication
POST /api/auth/register → Register a new user
POST /api/auth/login → Login and get JWT token

💰 Financial Records
GET /api/records → Get all records
POST /api/records → Create a record (Admin only)
PUT /api/records/:id → Update record (Admin only)
DELETE /api/records/:id → Delete record (Admin only)

📊 Dashboard
GET /api/dashboard → Get financial summary (Analyst/Admin)
🔍 Features Implemented
JWT Authentication
Role-based Access Control (RBAC)
CRUD operations for financial records
Filtering (type, category, date)
Pagination support
Aggregation for dashboard analytics

🧪 Testing
APIs tested using Postman.

💡 Assumptions
Only Admin can create/update/delete records
Analyst can access dashboard insights
Viewer has read-only access
JWT is used for authentication
Each record is associated with a user

🌐 Deployment
The application can be deployed on platforms like Render.
