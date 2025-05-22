# MyWeb Portfolio - Setup Guide

Follow these steps to clone and run this project locally:

## 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## 2. Install Dependencies

Install all required packages:

```bash
npm install
```

## 3. Set Up Environment Variables

Create a `.env` file in the root directory if needed (for API keys or other secrets).  
**Note:** The file `src/firebase.js` is ignored by git for security. If you need Firebase, create your own `src/firebase.js` using your Firebase project credentials.

Example `src/firebase.js`:
```javascript
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
```

## 4. Start the Development Server

```bash
npm start
```

This will run the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 5. Build for Production

To create a production build:

```bash
npm run build
```

---

**Need help?**  
Check the documentation or open an issue in the repository.
