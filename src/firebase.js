// firebase.js (no auth version)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration - use your actual Firebase project details
const firebaseConfig = {
  apiKey: "QUl6YVN5QXRLVFMxRnFGc0VCQnZkUVJjXzh6MktEdUdoUzAwdFQw",
  authDomain: "dmlkZW8tbWVldC1hcHAtYTJlYTEuZmlyZWJhc2VhcHAuY29t",
  projectId: "dmlkZW8tbWVldC1hcHAtYTJlYTE=",
  storageBucket: "dmlkZW8tbWVldC1hcHAtYTJlYTEuZmlyZWJhc2VzdG9yYWdlLmFwcA==",
  messagingSenderId: "MjM2Nzc1MDU4MzI2Ng==",
  appId: "MToyMzY3NzUwNTgzMjY6d2ViOmM0OWM5MTgyNThiNDVlZDkxODRiYjc="
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
