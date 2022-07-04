
import { changeRouter } from "../lib/router.js";
import {signInWithEmailAndPassword, auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, provider, signOut,onAuthStateChanged, getRedirectResult} from "./init.js"
// console.log(auth)

const observer = (hash) => {
  onAuthStateChanged(auth,(user) => {
    console.log(user)
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
     changeRouter(hash);
      // ...
    } else {
      // User is signed out
      // ...
      changeRouter('#/intro');
    }
  });
};

const userRegister = async (userName, email, password) => {
  try {
    const userRegistration = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userRegistration)
  } catch (error) {
    console.log(error);
    throw error.code;
  };

}

const userLogin = async (email, password) => {
  console.log(userLogin);
  try {
    const result = await signInWithEmailAndPassword(auth, email, password) // eliminar async await, retornar signWithEmailAndPassowrd()
    console.log(result); 
    return result;
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    
  }

}


 const usersGoogle = () => {
   signInWithPopup(auth, provider)
     .then((result) => {
       // This gives you a Google Access Token. You can use it to access the Google API.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       // The signed-in user info.
       const user = result.user;
       // ...
       console.log('user', user)
     }).catch((error) => {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
       // ...
       console.log('error', errorMessage)
     })
 };

const userRedirect = async (result) =>{
  try {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const resultRedirect = await getRedirectResult(auth);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }
  catch(error){
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
}
};

// const userLogin = async (email, password) => {
//   console.log(userLogin);
//   try {
//     const result = await signInWithEmailAndPassword(auth, email, password) // eliminar async await, retornar signWithEmailAndPassowrd()
//     console.log(result); 
//     return result;
//   } catch (error) {
//     console.log(error);
//     const errorCode = error.code;
//     const errorMessage = error.message;
    
//   }

// }


const userSignOut = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
  }

export { userRegister, userLogin, usersGoogle, observer,userSignOut, userRedirect }