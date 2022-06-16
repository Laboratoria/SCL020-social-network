import { auth, signInWithRedirect, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, provider } from './firebase.js';
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
    console.log(userData);
    // console.log(userData)
    // const prueba1 = await updateProfile(auth.currentUser, { 
    //   displayName: localStorage.getItem(userName),
    //   //photoURL : localStorage.getItem(userPhoto),
    // });
    // console.log(prueba1)
    const prueba2 = await sendEmailVerification(userData.user);
    console.log(prueba2);
    return userData.user;
  } catch (error) {
    // console.log(error);
    throw error.code;
  }
};
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

export { creatingNewUser, gettingActiveUser, signingInWithgoogle };
