import { createUserWithEmailAndPassword , auth, /*provider,*/ signInWithEmailAndPassword } from "./init.js";

export const register = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then ((res) => {
        //const user = userCredential.user;
        console.log(res.user)
    })
    .catch((err)=> {
        console.log(err.code)
        console.log(err.message)
        throw err.message;
    })
}


export const logIn = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    //const user = userCredential.user;
    console.log(userCredential.user)
    // ...
    })
    .catch((err) => {
        console.log(err.code)
        console.log(err.message)
        throw err.message;
    })
}





/*export const signInGoogle = (provider) => {
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
}*/
