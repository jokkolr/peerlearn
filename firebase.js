// firebase.js

// Import Firebase SDK modules (v11)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { 
  getFirestore, 
  enableIndexedDbPersistence 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk0HSUY7EsXvfZaRS5oQZc6EA_VPN6ULg",
  authDomain: "peerlearn-174bf.firebaseapp.com",
  projectId: "peerlearn-174bf",
  storageBucket: "peerlearn-174bf.appspot.com",
  messagingSenderId: "437373850171",
  appId: "1:437373850171:web:b5970a87611c4e23d5821e",
  measurementId: "G-V0MXC3CDLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for reuse
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🧩 Optional fix for "client is offline" errors (handles offline cache)
enableIndexedDbPersistence(db).catch((err) => {
  console.warn("Firestore persistence error:", err);
});
