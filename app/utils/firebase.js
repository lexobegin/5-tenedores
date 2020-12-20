import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBxzPc2N8ptdBYM7J6pVe8jM0k1WRGU2FI",
    authDomain: "tenedores2-42a69.firebaseapp.com",
    databaseURL: "https://tenedores2-42a69.firebaseio.com",
    projectId: "tenedores2-42a69",
    storageBucket: "tenedores2-42a69.appspot.com",
    messagingSenderId: "351333457007",
    appId: "1:351333457007:web:62e165915c82461fefc19a"

    //apiKey: "AIzaSyCvhXTpl9sftVJtmCgWllq7t4Iy8tRmqOk",
    //authDomain: "tenedores-9b435.firebaseapp.com",
    //databaseURL: "https://tenedores-9b435.firebaseio.com",
    //projectId: "tenedores-9b435",
    //storageBucket: "tenedores-9b435.appspot.com",
    //messagingSenderId: "234590718288",
    //appId: "1:234590718288:web:83960230e5765a88844455"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);