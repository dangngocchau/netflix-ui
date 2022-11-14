import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCD5YLHgFbVBBhE5xoBnF-r6mZw5bN8y_Q',
  authDomain: 'react-netflix-f0352.firebaseapp.com',
  projectId: 'react-netflix-f0352',
  storageBucket: 'react-netflix-f0352.appspot.com',
  messagingSenderId: '966918400818',
  appId: '1:966918400818:web:b744a7a3b7666a5be2c52b',
  measurementId: 'G-55V58ZR9GG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
