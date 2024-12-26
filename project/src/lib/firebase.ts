import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCC-nGXU7yl2iihCnuQCVJB81rPxvGrflU",
  authDomain: "aunexus-d87ae.firebaseapp.com",
  projectId: "aunexus-d87ae",
  storageBucket: "aunexus-d87ae.firebasestorage.app",
  messagingSenderId: "194233303374",
  appId: "1:194233303374:web:c222fdbe56a1417c1c5e1f",
  measurementId: "G-YFMMQWWH0E"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Enable offline persistence with error handling
try {
  enableIndexedDbPersistence(db, {
    synchronizeTabs: true
  }).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence enabled in first tab only');
    } else if (err.code === 'unimplemented') {
      console.warn('Browser doesn\'t support persistence');
    }
  });
} catch (err) {
  console.error('Error enabling persistence:', err);
}

export { app, auth, db, storage, analytics };