import { signInWithEmailAndPassword, auth } from "./init.js"

const login = async(email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
        throw error.message
    }
}


export { login }


/*export const usersGoogle = () => {
    const provider = new GoogleAuthProvider();
}
const auth = getAuth(); {
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
  })};*/

 