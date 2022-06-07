import{initializeApp} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import config from './config.js'

export const app = initializeApp(config);
//const db = getFirestore(app);
