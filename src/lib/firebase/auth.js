import { signInWithEmailAndPassword, auth, signInWithPopup, provider, GoogleAuthProvider} from "./init.js"


const login = async(email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        throw error.message
    }
}

    export { login }


    export const authGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token);
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // ...
            window.location.href='/#feed'
          }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      };