import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB73mBTzg8wRVfaHSv7Zy6ks7tSlCEioP0",
  authDomain: "portfolio-2e91d.firebaseapp.com",
  databaseURL: "https://portfolio-2e91d-default-rtdb.europe-west1.firebasedatabase.app", // <-- Añade esta línea
  projectId: "portfolio-2e91d",
  storageBucket: "portfolio-2e91d.firebasestorage.app",
  messagingSenderId: "518787745726",
  appId: "1:518787745726:web:19e94d20ec338e67855bef"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };