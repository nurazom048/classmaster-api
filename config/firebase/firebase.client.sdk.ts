import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDeDlJSWUPr3CDVbUoxA-Ag_FKnAS3GOi0",
  authDomain: "rutinapp-cadc1.firebaseapp.com",
  projectId: "rutinapp-cadc1",
  storageBucket: "rutinapp-cadc1.appspot.com",
  messagingSenderId: "837394216188",
  appId: "1:837394216188:web:db9045a5cb6e18618dd379",
  measurementId: "G-98CE05FZG6"
};

// Client App ইনিশিয়ালাইজ করা হলো
const firebaseClientApp = initializeApp(firebaseConfig);

export default firebaseClientApp;