// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAp6nHiyOP9K5x2alhdOvuhPitvrFVF_h4",
  authDomain: "my-website-36655.firebaseapp.com",
  databaseURL: "https://my-website-36655.firebaseio.com",
  projectId: "my-website-36655",
  storageBucket: "",
  messagingSenderId: "1053381835406",
  appId: "1:1053381835406:web:f38f45345b7798e60527df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

const form = document.querySelector("#form");
form.addEventListener("submit", e => {
  e.preventDefault();

  fullName.value = "";
  phone.value = "";
  email.value = "";
});
