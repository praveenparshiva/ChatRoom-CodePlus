ChatRoom-CodeEditor

A full-stack project combining:

ChatRoom: A real-time chat application built with React frontend + Node.js backend + MongoDB.

CodeEditor: A Next.js frontend code editor with Clerk authentication.

Project Structure
ChatRoom-CodeEditor/
├─ ChatRoom/
│  ├─ backend/       # Node.js + Express + MongoDB
│  │  └─ .env        # Backend environment variables
│  └─ frontend/      # React frontend
│     └─ .env        # Frontend environment variables
└─ CodeEditor/
   └─ frontend/      # Next.js frontend
      └─ .env.local  # Clerk and other environment variables

ChatRoom Backend

Handles API routes, MongoDB connection, authentication, and JWT.

Environment Variables (ChatRoom/backend/.env)
PORT=5001
MONGO_URI=<your-mongodb-connection-string>
STEAM_API_KEY=<your-steam-api-key>
STEAM_API_SECRET=<your-steam-api-secret>
JWT_SECRET_KEY=<your-jwt-secret>
NODE_ENV=production

Setup & Run
cd ChatRoom/backend
npm install
npm run dev


Backend server runs on PORT defined in .env.


ChatRoom Frontend

React app connecting to the backend API.

Environment Variables (ChatRoom/frontend/.env)
VITE_STREAM_API_KEY=<your-stream-api-key>
REACT_APP_API_URL=http://localhost:5001   # Or your deployed backend URL

Setup & Run
cd ChatRoom/frontend
npm install
npm run dev


Access at http://localhost:3000


CodeEditor Frontend (Next.js)

Next.js code editor with Clerk authentication.

Environment Variables (CodeEditor/frontend/.env.local)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_API_URL=<optional: backend API URL>

Setup & Run
cd CodeEditor/frontend
npm install
npm run dev


Access at http://localhost:3000

Deployment:

Project	               Platform	                 Notes
ChatRoom Frontend   	   Netlify	                 Build directory: ChatRoom/frontend/build
ChatRoom Backend  	   Render / Railway	        Node.js + MongoDB
CodeEditor Frontend	   Vercel(recommended)	     Next.js optimized; can use Netlify plugin


Scripts
Project	                Script	                   Description
ChatRoom Backend	       npm run dev	             Start backend server locally
ChatRoom Frontend      	 npm run dev	             Start React app locally
CodeEditor Frontend	    npm run dev	             Start Next.js app locally
Any frontend	          npm run build	             Build production-ready frontend

Notes

Environment variables must be set for API keys, Clerk, MongoDB, JWT, etc.

ChatRoom backend must be running for the frontend to work.

CodeEditor is fully frontend but can optionally call backend APIs via NEXT_PUBLIC_API_URL.

Always ignore .env files in .gitignore.

Contributing:

Fork the repository.

Create a feature branch:
git checkout -b feature/my-feature


Commit your changes:
git commit -m "Add feature"

Push and create a pull request:
git push origin feature/my-feature
