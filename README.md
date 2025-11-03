# PeerLearn Frontend
**PeerLearn AI** is an intelligent peer-learning platform that matches learners based on performance, learning styles, and goals — helping low-performing learners connect with high performers through AI-powered collaboration. This repository contains the **frontend** of the project, built with **React (Vite)** and **Tailwind CSS**.

## 🚀 Features
- 🎓 AI-based peer matching system  
- 💬 Collaborative learning rooms (chat & notes)  
- 🧠 AI study assistant (personalized support)  
- 📈 Progress tracking & dashboards  
- 🏆 Gamified achievements and leaderboards  
- 🔐 Authentication (login/signup)  
- 🌙 Modern, responsive UI (mobile-friendly)  

## 🧩 Tech Stack
| Layer | Technology |
|--------|-------------|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State Management | Context API / Redux (later) |
| HTTP Client | Axios |
| AI Integration | OpenAI API (via backend) |
| Deployment | GitHub Pages / Vercel |

## 📁 Folder Structure (simplified)
```
peerlearn-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/ (Navbar, Footer)
│   │   ├── ui/ (Button, Input, etc.)
│   │   └── pages/ (LandingHero, FeatureCard)
│   ├── pages/ (Landing.jsx, Login.jsx, Dashboard.jsx)
│   ├── services/ (api.js)
│   ├── contexts/ (AuthContext.js)
│   ├── hooks/ (useAuth.js)
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Setup & Installation
### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/peerlearn-frontend.git
cd peerlearn-frontend
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Configure environment variables
Create a `.env` file in the root folder and add:
```
VITE_API_URL=https://peerlearn-api.example.com
```
### 4️⃣ Start development server
```bash
npm run dev
```
Then open: **http://localhost:5173**

## 🧠 Environment Variables
| Variable | Description |
|-----------|--------------|
| `VITE_API_URL` | URL of your backend API (Render, Railway, etc.) |
| `VITE_OPENAI_KEY` | Optional: for direct AI calls (only via backend) |
> ⚠️ Never commit `.env` files — keep secrets private.

## 🧱 Scripts
```bash
npm run dev       # Start local dev server
npm run build     # Build production version
npm run preview   # Preview production build
npm run lint      # Lint all source files
npm run format    # Format code using Prettier
```

## 📋 Development Milestones
**Milestone A — Foundation**  
✅ Setup Vite + React + Tailwind  
✅ Create base folder structure  
⬜ Implement Landing Page (Navbar + Hero + Footer)

**Milestone B — Auth & Onboarding**  
⬜ Signup / Login UI  
⬜ Profile setup page

**Milestone C — Core App**  
⬜ Dashboard  
⬜ Peer Matching Page  
⬜ Peer Room (Chat UI)  
⬜ AI Assistant Widget

**Milestone D — Final Polish**  
⬜ Add testing  
⬜ CI/CD pipeline  
⬜ Deploy to Vercel or GitHub Pages

## 🤝 Contributing
1. Fork the repository  
2. Create a new branch (`feature/your-feature-name`)  
3. Commit your changes  
4. Push to your fork  
5. Open a pull request 🚀

## 📜 License
This project is currently unlicensed (for internal and educational use). A proper open-source license will be added later.

**Author:** Jacob Okoth  
**Project:** PeerLearn AI — Empowering collaborative learning with artificial intelligence.
