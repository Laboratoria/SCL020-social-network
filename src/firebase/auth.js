import { showTemplates } from './../lib/router.js';
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  provider,
  signInWithRedirect,
  signInWithPopup
} from "./init.js";


// Iniciar Sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    showTemplates('#/home')
    alert('Sesión iniciada correctamente')
    return userCredential;
  } catch (error) {
    console.log(error.message)
    throw error.message;
  }
};

// Registro de usuario
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    showTemplates('#/home')
    return userCredential;
  } catch (error) {
    if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
      alert('Invalido')
    }
    throw error.message;
  }
};
//ORIGINAL
//Regristro con google
// const googleLogin = () => {
//   signInWithRedirect(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     console.log(token)
//   // The signed-in user info.
//     const user = result.user;
//     console.log('user', user)
//   }).catch((error) => {
//     console.log(error)
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// }

//Fer
// const googleLogin = async () => {
//   try {
//     const response = await signInWithRedirect(auth, provider);
//     console.log(response);
//     return response.user;
//   } catch (error) {
//     console.log(error.message)
//     throw error.message;
//   }
// };

const googleLogin = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
    // The signed-in user info.
  const user = result.user;
  console.log("user", user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
    // The email of the user's account used.
  const email = error.customData.email;
  
    // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log("error", errorMessage)
    // ...
  });    
}



// Cerrar sesion
const logout = async () => {
  try {
    const response = await signOut(auth);
    showTemplates('#/')
    alert('La sesión se cerró exitosamente')
    return response;
  } catch (error) {
    throw error.message;
  }
};

export { login, logout, signup, googleLogin };

//Iniciar sesion con google
