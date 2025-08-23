// File: /db/firebase.js
// Global Firebase Initialization

// Import Firebase core + services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged, 
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


// ✅ Firebase Config (your project)
const firebaseConfig = {
  apiKey: "AIzaSyAR9J2Wz7Eu8dXRzDG8JNHcymLCUQUPJRo",
  authDomain: "deee-9ab53.firebaseapp.com",
  projectId: "deee-9ab53",
  storageBucket: "deee-9ab53.appspot.com",
  messagingSenderId: "399732664479",
  appId: "1:399732664479:web:b84ac30e8266cc51761aaa",
  measurementId: "G-524ZPBX42B"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

// ✅ Export everything you’ll need globally
export {
  app,
  auth,
  db,
  storage,
  provider,
  // Auth methods
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  // Firestore methods
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  onSnapshot,
  // Storage methods
  ref,
  uploadBytes,
  getDownloadURL
};
