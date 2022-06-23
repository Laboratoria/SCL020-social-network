import { 
    showTemplate } from "../lib/router.js";
import { 
    createUserWithEmailAndPassword, 
    auth, 
    provider, 
    signInWithEmailAndPassword, 
    signInWithPopup,
    GoogleAuthProvider, 
    onAuthStateChanged,
    signOut } from "./init.js";

//Crea nueva cuenta de usuario
export const signup = async (auth, email, password) => {
    console.log(email);
    console.log(password);
    try {
        const createUser = await createUserWithEmailAndPassword(auth, email, password);
        //console.log(createUser);
        showTemplate("#/welcome")
        return createUser;
        //return userCredential;
    }
    catch (error) {
        console.log(error.message);
        if(error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
            alert('Email Invalido')
        }
        else if(error == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            alert('Contraseña Invalido')
        }
        else {
            console.log("no funciona");
        }
        throw error.message;
    }
}

/* INICIAR SESION */

export const logIn = async(email,password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        showTemplate("#/feed");
        console.log("inicio de sesion correcto");
        return userCredential;
    } catch(error){
        console.log("Error al iniciar sesion")
        throw error.message
    }
}


/* Inicio CUENTA GOOGLE */

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
    console.log(error)
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


/* CERRAR SESION */

export const logout = async () => {
    try {
        const response = await signOut(auth);
        showTemplate("");
        console.log("sesion cerrada");
        return response;
    }   
    catch(error) {
        throw error.message;
    }
}


/* OBSERVADOR */

// export const obs = () => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//                 //User is signed in, see docs for a list of available properties
//                 //https://firebase.google.com/docs/reference/js/firebase.User
//             const uid = user.uid;
//             console.log("user is signed out")
//         }
//         else {
//                 //user is signed out
//                 console.log("user is signed out")
//         }
//     })
// }

export const obs = () => {
    if(auth.currentUser){
        return true;
    }else {
        return false
    }
}