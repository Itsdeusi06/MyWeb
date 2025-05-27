# MyWeb Portfolio - Setup Guide - Hosting on Firebase

# 🚨 [Visit my Portafolio](https://portfolio-2e91d.web.app/) 🚨

Follow these steps to clone and run this project locally:

## 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Itsdeusi06/MyWeb
cd MyWeb
```

## 2. Install Dependencies

Install all required packages:

```bash
npm install
npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome-svg-core
npm install react-icons
npm install firebase
npm install i18next react-i18next i18next-browser-languagedetector --legacy-peer-deps
```

## 3. Set Up Environment Variables
 
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

## 6. Host with Firebase Hosting

### a. Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### b. Login to Firebase

```bash
firebase login
```

### c. Initialize Firebase Hosting (only once per project)

```bash
firebase init 
```
- Select your Firebase project.
- Set `build` as your public directory.
- Configure as a single-page app: **Yes**.
- Do **not** overwrite `index.html` if prompted.

### d. Deploy to Firebase Hosting

```bash
npm run build
firebase deploy
```

Your site will be live at the Firebase Hosting URL provided in the terminal.

---

**Need help?**  
Check the documentation or open an issue in the repository.
