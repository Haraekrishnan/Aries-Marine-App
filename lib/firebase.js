// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL62sfBo8V9tIg6pHX34y0n_oYs8Thfcs",
  authDomain: "aries-marine-project-hub.firebaseapp.com",
  projectId: "aries-marine-project-hub",
  storageBucket: "aries-marine-project-hub.appspot.com",
  messagingSenderId: "306313830074",
  appId: "1:306313830074:web:7db0e860e176f15da7ec83"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
