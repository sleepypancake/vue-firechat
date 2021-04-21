import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCKCsbb2D9eldETG0yVINr1bzrEv35RFHI",
    authDomain: "firechat-682dc.firebaseapp.com",
    projectId: "firechat-682dc",
    storageBucket: "firechat-682dc.appspot.com",
    messagingSenderId: "437473363140",
    appId: "1:437473363140:web:e1e4e6d6e695e3066ef591"
}

const db = firebase.initializeApp(config);

export default db;