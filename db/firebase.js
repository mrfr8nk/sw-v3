// firebase.js - Global Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp, 
  onSnapshot,
  limit,
  arrayUnion 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR9J2Wz7Eu8dXRzDG8JNHcymLCUQUPJRo",
  authDomain: "deee-9ab53.firebaseapp.com",
  projectId: "deee-9ab53",
  storageBucket: "deee-9ab53.appspot.com",
  messagingSenderId: "399732664479",
  appId: "1:399732664479:web:b84ac30e8266cc51761aaa",
  measurementId: "G-524ZPBX42B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Create Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export everything you might need
export {
  app,
  auth,
  db,
  storage,
  googleProvider,
  // Firestore methods
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  onSnapshot,
  limit,
  arrayUnion,
  // Storage methods
  ref,
  uploadBytes,
  getDownloadURL,
  // Auth methods (add more as needed)
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updatePassword
};
