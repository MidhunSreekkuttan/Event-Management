#    Project name : Event Management System

The Event Management System is a web-based application designed to simplify and automate the process of **planning, organizing**, and **managing events** efficiently. In many institutions and organizations, event-related activities such as **event registration, participant tracking, catering coordination, and communication** are handled manually, making the process time-consuming, error-prone, and inefficient. This system aims to overcome these limitations by providing a centralized digital platform for comprehensive eventmanagement.

---

## ✨ Features

### 👨‍💻 Admin
- Admin can add and manage events
- System stores catering staff details
- Checks staff availability by date
- Automatically selects available staff for events
- Sends notifications to selected staff
- Analytics dashboard (future enhancement 🚀)

### 👤 User
- 
- 
- 
- 
- 
- 

### Supporting Staff
- 
- 
- 
- 
- 
- 
- 

### Workers
- 
- 
- 
- 
- 
- 

### Event Management
- 
- 
- 
- 
- 
- 
- 

---

## 🛠️ Tech Stack  

- **Frontend**: React.js (with TailwindCSS + Context API)  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Authentication**: 
- **Real-time Updates**:   

---

## 📂 Project Structure
```yaml
│── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # User, Industry, Agent dashboards
│ │ ├── services/ # API calls (Axios)
│ │ └── context/ # React Context for state management
│
│── backend/ # Express backend
│ ├── controllers/ # Business logic
│ ├── models/ # MongoDB schemas
│ ├── middlewares/ # Auth & validation
│ ├── routes/ # API endpoints
│ └── server.js # Entry point
│
│── package.json
│── README.md
```

## 🚀 Getting Started  
---
### 🔹 Clone the Repository  

```bash
git clone https://github.com/MidhunSreekkuttan/Event-Management.git
cd Event-Management
```

### 🔹 Install Dependencies
Backend :
```bash
cd backend
npm install
```
Frontend :
```bash
cd frontend
npm install
```

### 🔹 Environment Variables
Create a `.env` file inside `/server` with:
```ini
MONGODB_URL = 'mongodb+srv://eventmanagement:eventmanagement123@cluster0.hzx7cwm.mongodb.net/Adhithi'

JWT_SECRET='podaaMyreeee'

NODE_ENV='development'

NO_REPLAY_EMAIL='garudangaming987@gmail.com'

NO_REPLAY_PASSWORD='amum yxls vbla nmdx'
```

Create a `.env` file inside `/admin` with:
```ini


```

Create a `.env` file inside `/frontend` with:
```ini
VITE_BACKEND_URL = 'http://localhost:4000'
```

### 🔹 Run the App
Backend :
```bash
cd backend
npm run dev
```
Frontend :
```bash
cd frontend
npm run dev
```

The app should now be running at:

- Frontend → http://localhost:5173/

- Backend API → http://localhost:4000


## 🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request. Follow contribution guidelines.

## 📜 License
This project is liceneced under MIT. Free to use and modify.