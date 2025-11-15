# Code Editor & Chat Room 🚀

This repository contains two independent projects: a versatile Code Editor built with Next.js and Monaco Editor, and a real-time Chat Room application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Stream Chat integration.

The **Code Editor** allows users to write and execute code in various languages directly in the browser. It features syntax highlighting, customizable themes, and persistent storage.

The **Chat Room** provides a platform for real-time communication between users. It includes features like user authentication, friend requests, and Stream Chat integration for seamless messaging.

## ✨ Key Features

### Code Editor
- **Multi-Language Support:** Write and execute code in various programming languages.
- **Monaco Editor Integration:** Enjoy a rich code editing experience with syntax highlighting and autocompletion.
- **Customizable Themes:** Choose from different editor themes to suit your preferences.
- **Persistent Storage:** Your code is saved in local storage, so you don't lose progress.
- **Adjustable Font Size:** Customize the font size for comfortable coding.

### Chat Room
- **User Authentication:** Secure signup and login functionality.
- **Friend Requests:** Connect with other users by sending and accepting friend requests.
- **Real-Time Messaging:** Communicate with friends in real-time using Stream Chat integration.
- **User Recommendations:** Discover new users to connect with.
- **Profile Management:** Update your profile information, including avatar, bio, and language preferences.

## 🛠️ Tech Stack

### Code Editor

- **Frontend:**
    - Next.js
    - React
    - Tailwind CSS
    - Monaco Editor (@monaco-editor/react)
    - Zustand (State Management)
    - Framer Motion (Animations)
    - Lucide React (Icons)
    - Clerk (Authentication)

### Chat Room

- **Frontend:**
    - React
- **Backend:**
    - Node.js
    - Express.js
- **Database:**
    - MongoDB (with Mongoose)
- **Real-time Communication:**
    - Stream Chat
- **Authentication:**
    - JWT (JSON Web Tokens)
    - Cookie-parser
- **Other:**
    - CORS
    - bcryptjs (Password Hashing)
    - dotenv (Environment Variables)

## 📦 Getting Started

Follow these instructions to set up both the Code Editor and Chat Room projects locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB installed and running
- Stream Chat account (for Chat Room)

### Code Editor Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd codeEditor
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Configure environment variables:

    - Create a `.env.local` file in the `codeEditor` directory.
    - Add any necessary environment variables (e.g., Clerk publishable key).

### Code Editor Running Locally

```bash
npm run dev # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Chat Room Installation

1.  Clone the repository (if you haven't already):

    ```bash
    git clone <repository-url>
    cd ChatRoom/backend
    ```

2.  Install backend dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Configure environment variables:

    - Create a `.env` file in the `ChatRoom/backend` directory.
    - Add the following environment variables:

    ```
    MONGO_URI=<your_mongodb_connection_string>
    PORT=5000
    JWT_SECRET_KEY=<your_jwt_secret_key>
    STEAM_API_KEY=<your_stream_api_key>
    STEAM_API_SECRET=<your_stream_api_secret>
    NODE_ENV=development # or production
    ```

4. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install # or yarn install
    ```

5. Configure frontend environment variables:
    - Create a `.env` file in the `ChatRoom/frontend` directory.
    - Add the following environment variables:
    ```
    REACT_APP_STREAM_API_KEY=<your_stream_api_key>
    ```

### Chat Room Running Locally

1.  Start the backend server:

    ```bash
    cd ChatRoom/backend
    npm run dev # or yarn dev
    ```

2.  Start the frontend development server:

    ```bash
    cd ChatRoom/frontend
    npm start # or yarn start
    ```

Open [http://localhost:3000](http://localhost:3000) (or the port specified by the frontend) in your browser to access the Chat Room application.

## 📂 Project Structure

```
├── codeEditor/
│   ├── next.config.ts
│   ├── src/
│   │   ├── app/
│   │   │   ├── (root)/
│   │   │   │   ├── _components/
│   │   │   │   │   ├── EditorPanel.tsx
│   │   │   │   │   ├── OutputPanel.tsx
│   │   │   │   │   ├── RunButton.tsx
│   │   │   │   │   └── EditorPanelSkeleton.tsx
│   │   │   │   ├── _constants.ts
│   │   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   ├── store/
│   │   │   ├── useCodeEditorStore.ts
│   │   ├── types/
│   │   │   ├── index.ts
│   │   ├── middleware.ts
├── ChatRoom/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   │   ├── auth.controller.js
│   │   │   │   ├── chat.controller.js
│   │   │   │   ├── user.controller.js
│   │   │   ├── lib/
│   │   │   │   ├── db.js
│   │   │   │   ├── stream.js
│   │   │   ├── middleware/
│   │   │   │   ├── auth.middleware.js
│   │   │   ├── models/
│   │   │   │   ├── FriendRequest.js
│   │   │   │   ├── User.js
│   │   │   ├── routes/
│   │   │   │   ├── auth.route.js
│   │   │   │   ├── chat.route.js
│   │   │   │   ├── user.route.js
│   │   │   ├── server.js
│   ├── frontend/
│   │   ├── ... (React frontend files)
```

## 📸 Screenshots

(Add screenshots of the Code Editor and Chat Room here to showcase the user interface and features.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [charliepraveen535@gmail.com](mailto:charliepraveen535@gmail.com).

## 💖 Thanks

Thank you for checking out this project! I hope you find it useful and enjoyable.
