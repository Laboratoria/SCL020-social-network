// import { navigate } from '../router/routes.js';
import {
  getAuth,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  provider,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged
} from './init.js';
import { savedUser } from './store.js';

// CREATE USER WITH EMAIL
const createUser = async (auth, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return response;
  } catch (error) {
    throw error.message;
  }
};

// SIGN IN WITH EMAIL
// const signIn = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// const signIn = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     throw error.message;
//   }
// };

// SIGN OUT WITH EMAIL
// const signOutWithEmail = getAuth();
// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch((error) => {
//     // An error happened.
//   });

// const signOutWithEmail = async () => {
//   try {
//    await signOut(auth);
//   } catch (error) {
//     throw error.message;
//   }
// };

// REDIRECT GOOGLE ACCESS
const redirectResult = function(){
getRedirectResult(auth)
  .then((result) => {
    // navigate("news")
    // console.log(result)
// This gives you a Google Access Token. You can use it to access Google APIs.
const credential = GoogleAuthProvider.credentialFromResult(result);
 const token = credential.accessToken;

// The signed-in user info.
const user = result.user;
})
.catch((error) => {
  // console.log(error)
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);

});
}
// const redirectEmail = async (auth) => {
// try {
// await getRedirectResult(auth);
// } catch (error) {}
// };

const logIn = async function(){
  signInWithRedirect(auth, provider)
// export async function logIn(){
//   try{
//     const response=await signInWithRedirect(GoogleAuthProvider);
//     console.log(response)
//     return response.user;
//   } catch(error){
//     console.log(error)
//       throw error.message;
//     }
}

// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User


// obtener el usuario actual con un observador en el objeto auth 
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     const uid = await (user.uid);
//     console.log('logged user')
//     return savedUser(uid, email)
//   } else {
//     console.log('user logout')
//   }
// });

export {
  logIn, redirectResult, createUser, onAuthStateChanged
};
// getAuth, signIn, signOutWithEmail,
