    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import {
      getFirestore,
      collection,
      getDocs,
      getDoc,
      doc,
      setDoc
    } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

    // Your Firebase config
    const firebaseConfig = {
        apiKey: "AIzaSyAR9J2Wz7Eu8dXRzDG8JNHcymLCUQUPJRo",
        authDomain: "deee-9ab53.firebaseapp.com",
        projectId: "deee-9ab53",
        storageBucket: "deee-9ab53.firebasestorage.app",
        messagingSenderId: "399732664479",
        appId: "1:399732664479:web:b84ac30e8266cc51761aaa",
        measurementId: "G-524ZPBX42B",
      };

    // Initialize Firebase
    const appFirebase = initializeApp(firebaseConfig);
    const db = getFirestore(appFirebase);
