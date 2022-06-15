import { 
    showTemplate } from "../lib/router.js";
import { 
    createUserWithEmailAndPassword, 
    auth, 
    provider, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    onAuthStateChanged } from "./init.js";

//Crea nueva cuenta de usuario
export const signup = async(email, password) => {
    try {
        const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
        showTemplate("#/welcome");
        console.log("cuenta creada");
        return userCredential;
    }
    catch (error) {
        showTemplate("#/sign-up");
        alert(`Error al crear la cuenta ${error.code}`);
        console.log(error.code)
        console.log(error.message)
        throw error.message;
        
    }
}

export const obs = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
                //User is signed in, see docs for a list of available properties
                //https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log("user is signed out")
        }
            else {
                //user is signed out
                console.log("user is signed out")
            }
        })
}

// export const logIn = (email,password) => {
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     // Signed in
//     //const user = userCredential.user;
//     console.log(userCredential.user)
//     // ...
//     })
//     .catch((err) => {
//         console.log(err.code)
//         console.log(err.message)
//         throw err.message;
//     })
// }


export const logIn = async(email,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error){
        throw error.message
    }
}


export const signInGoogle = () => {
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

export const logout = async () => {
    try {
        const response = await signOut(auth);
        console.log("chi");
        console.log(response);
        return response;
    }   catch(error) {
        throw error.message;
    }
};