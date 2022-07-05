import {
    showTemplate
} from "../lib/router.js";
import {
    createUserWithEmailAndPassword,
    auth,
    provider,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    updateProfile,
} from "./init.js";


/* CREATE USER */
export const signup = async (auth, email, password, NameUser) => {

    try {
        const createUser = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(createUser.user, {
            displayName: NameUser
        });
        showTemplate("#/welcome")
        return createUser;
    }
    catch (error) {
        // console.log(error.message);
        if (error.code == "auth/invalid-email") {
            console.log("prueba")
            alert("Error, Invalid Email")
        }
        else if (error.code == "auth/weak-password") {
            alert("Error, Invalid Password")
        }
        else {
            console.log("Not working");
        }
        throw error.message;
    }
};

/* LOGIN */
export const logIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        showTemplate("#/feed");
        console.log("Correct Login");
        console.log(userCredential);
        return userCredential;
    }
    catch (error) {
        if (error.code == "auth/user-not-found") {
            alert("Error, user not found")
        }
        else {
            console.log("Invalid Login");
        }
        // console.log(error);  /* NO LO SAQUE*/
        throw error.message
    }
};


/* LOGIN GOOGLE */
export const signInGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // console.log("user", user);
            showTemplate("#/feed");
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("error", errorMessage);
        })
};


/* LOGOUT */
export const logout = async () => {
    try {
        const response = await signOut(auth);
        showTemplate("#/");
        console.log("sesion cerrada");
        return response;
    }
    catch (error) {
        throw error.message;
    }
};

