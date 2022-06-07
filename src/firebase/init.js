import{initializeApp} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
// import{ } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import config from './config.js'

export const app = initializeApp(config);
//const db = getFirestore(app);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export const register = () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     auth.createUserWithEmailAndPassword(email, password)
//     .then ((res) => {
//         console.log(res.user)
//     })
//     .catch((err)=> {
//         console.log(err.code)
//         console.log(err.message)
//     })
// }

