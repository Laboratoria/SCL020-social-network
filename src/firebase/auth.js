import { createUserWithEmailAndPassword , auth, /*provider,*/ signInWithEmailAndPassword } from "./init.js";


export const register = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => {
        const user = userCredential.user;
        //console.log(userCredential.user);
    })
    .catch((error)=> {
        alert(error.message)
        const errorCode = error.code;
        // console.log(error.code)
        const errorMessage = error.message;
        // console.log(error.message)
        //throw error.message;
    })
};


export const logIn = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    //const user = userCredential.user;
    console.log(userCredential.user)
    // ...
    })
    .catch((error) => {
        alert(error.message)
        console.log(error.code)
        console.log(error.message)
        throw err.message;
    })
}



// const saveData = () => {
//     db.collection("users")
//     .add ({
//         email: email,
//         password: password
//     })
//     .then ((docRef) => {
//         console.log("Document written with ID: ", docRef.id)
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error)
//     })

// }

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
