import { showTemplates } from './../lib/router.js';
import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setDoc,
  db,
  doc,
  signOut,
  provider,
  signInWithPopup
} from "./init.js";
//import { async } from 'regenerator-runtime';


// Iniciar Sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    showTemplates('#/home')
    return userCredential;
  } catch (error) {
    console.log(error.message)
    throw error.message;
  }
};
const signup = async (data) => {
  /* 
    const data  = {
      username: 'username1', undefined,
      email: 'username@emailg.com',
      password: 'contraseña',
      birthday: 2001/05/25,
      userType: 'baker',
      ---photoUrl: ',,,'
    }
  */
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const userFirestoreRegister = await setDoc(
      doc(db, "users", userCredential.user.uid), 
      { 
        username: data?.username,
        birthday: data?.birthday,
        userType: data?.userType
      }
    )

    showTemplates('#/home')
    return userCredential;
  } catch (error) {
    if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
      alert('Invalido')
    }
    throw error.message;
  }
};

// Registro de usuario
// const signup = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     showTemplates('#/home')
//     return userCredential;
//   } catch (error) {
//     if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
//       alert('Invalido')
//     }
//     throw error.message;
//   }
// };

// const googleLogin = async () => {
//   try {
//     const response = await signInWithPopup(auth, provider);
//     showTemplates('#/home')
//     console.log(response);
//     return response.user;
//   } catch (error) {
//     console.log(error.message)
//     throw error.message;
//   }
// };
const googleLogin = () => {
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

// Cerrar sesion
const logout = async () => {
  try {
    const response = await signOut(auth);
    showTemplates('#/')
    alert('La sesión se cerró exitosamente')
    return response;
  } catch (error) {
    throw error.message;
  }
};


const data = async () =>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userName: "Ada",
      dateOfBirth: "Lovelace",
    });
      console.log("Document written with ID: ", docRef.id);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}
export { login, logout, signup, googleLogin, auth, onAuthStateChanged, data}; /* */

//Iniciar sesion con google
