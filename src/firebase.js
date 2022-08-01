import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnveR2C3Y6yibfnvjfdG32_PjuRkkPS80",
  authDomain: "whats-app-clone-b0cb0.firebaseapp.com",
  databaseURL: "https://whats-app-clone-b0cb0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whats-app-clone-b0cb0",
  storageBucket: "whats-app-clone-b0cb0.appspot.com",
  messagingSenderId: "553071180860",
  appId: "1:553071180860:web:8f2fd77817a17cdf3f9739",
  measurementId: "G-EEYS3H59G1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;