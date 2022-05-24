import {auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signInWithRedirect,getRedirectResult,signOut} from "./init.js";

// State of user
onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user logged in:', user);
    } else {
      console.log('user logged out');
    }
});

// Create user with email and password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  function google (){
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. We can use tu access Google APIs
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
  
        // The signed-in user info
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the users account used
        const email = error.customData.email;
        // The AuthCredential type that was used
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
    // Sign in with email and password, la persona ya existe
  signInWithEmailAndPassword(auth, email, password).then(() => {});
  // Sign out, la persona existe
    signOut(auth).then(() => {console.log("salió")});




export {createUserWithEmailAndPassword,google,signInWithEmailAndPassword,signOut}


