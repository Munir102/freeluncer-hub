
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMM0RQDEdhOofbubLe8Dlqd8qf9W9N-Nw",
    authDomain: "freeluncer-hub.firebaseapp.com",
    projectId: "freeluncer-hub",
    storageBucket: "freeluncer-hub.appspot.com",
    messagingSenderId: "564546033182",
    appId: "1:564546033182:web:6e0025468771a7c0df800f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;