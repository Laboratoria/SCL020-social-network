import { auth, signOut, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, provider } from './firebase.js';
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
    const prueba2 = await sendEmailVerification(userData.user);
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
    const userInWithGoogle = await signInWithPopup(auth, provider);
    return userInWithGoogle.user;
  } catch (error) {
    console.log(error);
    alert('Error al intentar ingresar con tu cuenta de Google', error)
  }
};

  const logOut = async () => {
    try {
      await signOut(auth);
        } catch (error) {
      console.log('error signout', error);
    }
  };
  

export { creatingNewUser, gettingActiveUser, signingInWithgoogle, logIn, logOut };
