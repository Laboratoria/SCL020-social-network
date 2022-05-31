import { navigate } from "./router/router.js"
import {onAuthStateChanged, auth} from './firebase/auth.js';

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in:', user.uid);
    navigate(window.location.pathname);
  } else {
    console.log('user logged out');
    navigate('/');
  }
});
