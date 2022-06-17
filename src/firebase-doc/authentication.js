import { auth, signInWithEmailAndPassword, signInWithRedirect, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, provider } from './firebase.js';
import { changeRoute } from '../lib/router.js';

// Observador
const gettingActiveUser = ( hash) => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
      changeRoute(hash);
    } else {
      changeRoute('/#home');
    }
  });
}
const creatingNewUser = async (userName, email, password) => {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
     console.log(userData)
     const prueba1 = await updateProfile(auth.currentUser, { 
       displayName: userName,
       photoURL : "https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5150068.jpg",
      
      });
     console.log(prueba1)
    const prueba2 = await sendEmailVerification(userData.user);
    console.log(prueba2);
    return userData.user;
  } catch (error) {
    // console.log(error);
    throw error.code;
  }
};


const logIn = async (email, password) => {
  try {
    const userLogIn = await signInWithEmailAndPassword(auth, email, password);
    console.log(userLogIn)
    return userLogIn
  } catch (error) {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
  }
  
}

const signingInWithgoogle = async () => {
  try {
    const userInWithGoogle = await signInWithRedirect(auth, provider);
    console.log(userInWithGoogle);
    return userInWithGoogle.user;
  } catch (error) {
    console.log(error);
    alert('Error al intentar ingresar con tu cuenta de Google', error);
    return null;
  }
};



export { creatingNewUser, gettingActiveUser, signingInWithgoogle, logIn };
