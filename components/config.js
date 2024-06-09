import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfaqgmyLPTqR-HenRpwq-taMGJmtswjmk",
    authDomain: "crud-mobile-514bf.firebaseapp.com",
    projectId: "crud-mobile-514bf",
    storageBucket: "crud-mobile-514bf.appspot.com",
    messagingSenderId: "213639331846",
    appId: "1:213639331846:web:e73cfa183a15e7ff03c387",
    measurementId: "G-JWQ6DSZB5R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





