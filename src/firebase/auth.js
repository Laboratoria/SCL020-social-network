import { signInWithEmailAndPassword, auth, createUserWithEmailAndPassword } from "./init.js"
console.log(auth)

const register = async(email, password) => {
    try {
        const userRegistration = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userRegistration);
    } catch (error) {
        console.log(error);
        throw error.code;
    };

}

const login = async(email, password) => {
    try {
        const prueba = await signInWithEmailAndPassword(auth, email, password)
        console.log(prueba);
    } catch (error) {
        const errorCode = error.code;
        throw error.message
    }
}





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
export {
    register,
    login
}