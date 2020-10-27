import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCvhXTpl9sftVJtmCgWllq7t4Iy8tRmqOk",
    authDomain: "tenedores-9b435.firebaseapp.com",
    databaseURL: "https://tenedores-9b435.firebaseio.com",
    projectId: "tenedores-9b435",
    storageBucket: "tenedores-9b435.appspot.com",
    messagingSenderId: "234590718288",
    appId: "1:234590718288:web:83960230e5765a88844455"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);