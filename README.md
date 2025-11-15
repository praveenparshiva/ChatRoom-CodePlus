# ChatRoom-CodeEditor

A full-stack project combining a **real-time chat application** with a **Next.js code editor**.  

- **ChatRoom**: React frontend + Node.js backend with MongoDB.
- **CodeEditor**: Next.js frontend with Clerk authentication.  

---

## **Project Structure**

ChatRoom-CodeEditor/
├─ ChatRoom/
│ ├─ backend/ # Node.js + Express + MongoDB
│ │ └─ .env # Backend environment variables
│ └─ frontend/ # React frontend
│ └─ .env # Frontend environment variables
└─ CodeEditor/
└─ frontend/ # Next.js frontend
└─ .env.local # Clerk and other environment variables

yaml
Copy code

---

## **Environment Variables**

### **ChatRoom Backend (`ChatRoom/backend/.env`)**
```env
PORT=5001
MONGO_URI=<your-mongodb-connection-string>
STEAM_API_KEY=<your-steam-api-key>
STEAM_API_SECRET=<your-steam-api-secret>
JWT_SECRET_KEY=<your-jwt-secret>
NODE_ENV=production
ChatRoom Frontend (ChatRoom/frontend/.env)
env
Copy code
VITE_STREAM_API_KEY=<your-stream-api-key>
REACT_APP_API_URL=http://localhost:5001   # or your deployed backend URL
CodeEditor Frontend (CodeEditor/frontend/.env.local)
env
Copy code
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_API_URL=<optional: API URL if CodeEditor calls backend>
⚠️ Never commit .env or .env.local files to GitHub.

Setup & Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/<your-username>/ChatRoom-CodeEditor.git
cd ChatRoom-CodeEditor
2. ChatRoom Backend
bash
Copy code
cd ChatRoom/backend
npm install
# or yarn install

# Run locally
npm run dev
# Server runs on PORT from .env
3. ChatRoom Frontend
bash
Copy code
cd ../frontend
npm install
# or yarn install

# Run locally
npm run dev
# Access React app at http://localhost:3000
Make sure the frontend .env points to your backend URL.

4. CodeEditor Frontend (Next.js)
bash
Copy code
cd ../../CodeEditor/frontend
npm install
# or yarn install

# Run locally
npm run dev
# Access Next.js app at http://localhost:3001 (or default)
Ensure .env.local contains Clerk keys and any API URLs.

Deployment
ChatRoom Frontend: Deploy to Netlify (build directory: ChatRoom/frontend/build)

ChatRoom Backend: Deploy to Render / Railway or any Node.js hosting

CodeEditor Frontend: Deploy to Vercel (Next.js optimized) or Netlify with Next.js plugin

Scripts
Project	Script	Description
ChatRoom Backend	npm run dev	Start backend server locally
ChatRoom Frontend	npm run dev	Start React app locally
CodeEditor Frontend	npm run dev	Start Next.js app locally
Any frontend	npm run build	Build production-ready frontend

Notes
Environment variables must be set for API keys, Clerk, MongoDB, JWT, etc.

ChatRoom backend must be running for the frontend to work.

CodeEditor is fully frontend but can optionally call backend APIs via NEXT_PUBLIC_API_URL.

Always ignore .env files in .gitignore.

Contributing
Fork the repository

Create a feature branch: git checkout -b feature/my-feature

Commit changes: git commit -m "Add feature"

Push: git push origin feature/my-feature

Create a pull request

