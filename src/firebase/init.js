import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
/*import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth.js";*/




import config from './config.js'


initializeApp(config)
const auth = getAuth();


/*signInWithRedirect(auth, provider);*/

export { initializeApp, signInWithEmailAndPassword, auth, createUserWithEmailAndPassword }