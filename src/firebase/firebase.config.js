// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaepeUlrrmDwmVO_RAILfeeJH-qpZk3FU",
    authDomain: "easybazaar-bcf10.firebaseapp.com",
    projectId: "easybazaar-bcf10",
    storageBucket: "easybazaar-bcf10.appspot.com",
    messagingSenderId: "1093528233059",
    appId: "1:1093528233059:web:0056ac63f82ba3fc394456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;