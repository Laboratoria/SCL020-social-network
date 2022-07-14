import { changeRouter } from "../lib/router.js";
/*Importamos de firebase las funciones de inicializar la autenticación de nuevos usuarios, 
y de usuarios con cuenta google*/
import {
    auth,
    provider,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "./init.js"
//Creamos la función que permite a usuarios nuevos registrarse
const userRegister = async(userName, email, password) => {
        try {
            const userRegistration = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userRegistration)
        } catch (error) {
            console.log(error);
            throw error.code;
        };
    }
    //Esta función permite a usuarios registrados loguearse
const userLogin = async(email, password) => {
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
    //Esta función permite a usuarios con cuentas google, loguearse con su mismo proveedor
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
                //changeRouter('#/wall')
            window.location.href = '#/wall'
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
//Esta función permite desloguear usuarios que ya estan dentro de la app
const userSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("usuario deslogueado")
            // Sign-out successful.
        })
        .catch((error) => {
            console.log("usuario continua logueado")
            // An error happened.
        });
    }
//Función que permite ver el estado actual del usuario  que esten dentro de la app 
const observer = (hash) => {
    onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            changeRouter(hash);
            // ...
            const uid = user.uid
            console.log(uid)
        } else {
            // User is signed out
            // ...
            changeRouter('#/intro');
        }
    });
};

export { userRegister, userLogin, usersGoogle, observer, userSignOut }