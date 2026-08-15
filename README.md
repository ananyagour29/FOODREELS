
# FOOD@REELS – Food Reels Platform 🍔🎥

A full-stack MERN-based food reels platform where users can scroll short food videos (like Instagram Reels), like/save content, and explore food partner profiles. Food partners can upload and manage their reels.

---

## ✨ Features

### 👤 User Features
- Scroll and watch food reels (short videos)
- Like reels ❤️
- Save reels 🔖 for later viewing
- View saved videos in a separate **Saved tab**
- Visit food partner profiles
- Mobile-first responsive reel experience

---

### 🧑‍🍳 Food Partner Features
- Register and login as food partner
- Upload food reels (video + details)

---

### 🎬 Reel Experience
- Fullscreen vertical scroll (TikTok/Instagram style)
- Auto-play videos on scroll
- Clean overlay UI with title & description
- Bottom navigation for easy access

---

### ⚙️ Backend Features
- RESTful API using Express.js
- JWT-based authentication (User + Food Partner)
- MongoDB integration for storing users, reels, and interactions

---
## folder structure
FOOD@REELS/
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── food-partner.controller.js
│   │   │   └── food.controller.js
│   │   │
│   │   ├── db/
│   │   │   └── db.js
│   │   │
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── food.model.js
│   │   │   ├── foodpartner.model.js
│   │   │   ├── like.model.js
│   │   │   ├── save.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── food-partner.routes.js
│   │   │   └── food.routes.js
│   │   │
│   │   └── services/
│   │       └── storage.service.js
│   │
│   ├── app.js
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── vercel.json
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   └── react.svg
│   │   │
│   │   ├── components/
│   │   │   ├── BottomNav.jsx
│   │   │   ├── Button.jsx
│   │   │   └── ReelFeed.jsx
│   │   │
│   │   ├── pages/
│   │   │   │
│   │   │   ├── auth/
│   │   │   │   ├── ChooseRegister.jsx
│   │   │   │   ├── FoodPartnerLogin.jsx
│   │   │   │   ├── FoodPartnerRegister.jsx
│   │   │   │   ├── UserLogin.jsx
│   │   │   │   └── UserRegister.jsx
│   │   │   │
│   │   │   ├── food-partner/
│   │   │   │   ├── CreateFood.jsx
│   │   │   │   └── Profile.jsx
│   │   │   │
│   │   │   └── general/
│   │   │       ├── Home.jsx
│   │   │      
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── auth-shared.css
│   │   │   ├── bottom-nav.css
│   │   │   ├── create-food.css
│   │   │   ├── profile.css
│   │   │   ├── reels.css
│   │   │   └── theme.css
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vercel.json
│   └── vite.config.js
│
├── .gitignore
│
└── README.md
## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- React Toastify
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (file uploads)
- ImageKit (video storage)


