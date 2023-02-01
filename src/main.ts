import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVurHKTblFGN_2saIAmxvJ556HF57bbOk",
  authDomain: "web-proje-54ded.firebaseapp.com",
  projectId: "web-proje-54ded",
  storageBucket: "web-proje-54ded.appspot.com",
  messagingSenderId: "991646216210",
  appId: "1:991646216210:web:f760be8e0e72604f2ae8cb",
};

// Initialize Firebase
initializeApp(firebaseConfig);

import "./assets/main.css";
import "./assets/responsive.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
