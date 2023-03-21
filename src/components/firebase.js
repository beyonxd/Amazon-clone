import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3ZPCtTlDQgSe2nX7hcnh-bV9DuQ6PyOs",
  authDomain: "clone-ca3f1.firebaseapp.com",
  projectId: "clone-ca3f1",
  storageBucket: "clone-ca3f1.appspot.com",
  messagingSenderId: "922448322758",
  appId: "1:922448322758:web:af0d40e6fb21fe9c72b7c7",
  measurementId: "G-V9LGL97G3V"
};

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebaseApp.firestore();

// it will handle the sign in stuff
const auth = firebase.auth();

export { db, auth };
export default firebase;