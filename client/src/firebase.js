import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCKZ-8J5zurdyZ4QvwmCqfiPDEkxcHmnI8",
  authDomain: "recipe-app-470807.firebaseapp.com",
  projectId: "recipe-app-470807",
  storageBucket: "recipe-app-470807.firebasestorage.app",
  messagingSenderId: "836625707452",
  appId: "1:836625707452:web:d10804d73baf3625273bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Functions
export const functions = getFunctions(app);
