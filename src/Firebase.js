import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBBKhFJuohizEVmMu5T93GJn4el9NovXdw",
  authDomain: "te-project-e0020.firebaseapp.com",
  databaseURL: "https://te-project-e0020.firebaseio.com",
  projectId: "te-project-e0020",
  storageBucket: "te-project-e0020.appspot.com",
  messagingSenderId: "515648217487",
  appId: "1:515648217487:web:1e46322c5d015b9e72ebfa",
  measurementId: "G-G3H4VCQK6Y"
};

firebase.initializeApp(config);


export default firebase;