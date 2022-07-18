import {
  auth,
  provider,
  signInWithPopup,
  doc, db,
  setDoc, getDoc, signOut
} from "./init.js";


export const loginGoogle = () => {

	const btnGoogle = document.querySelector('.logIn');
	btnGoogle.addEventListener('click', (event) => {
		event.preventDefault();
	
    loginWithGoogle();
	});
};



export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const userFirestore = setDoc(doc(db, "users", user.uid),{ 
    name : user.displayName,
    email: user.email
  });
    console.log(user);
    console.log(userFirestore);
    window.location.href = "#/feed"; 
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code; 
    const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log()
  });


}



export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('log out')
     console.log(currentUser());
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
};

//console.log(logOut(auth));

// export const getUser = async (id) => {
//   try {
//     const data = doc(db, 'users', id);
//     const userData = await getDoc(data);
//     return userData.data(); 
//   } catch (err) {
//     console.log(err);
//   }
// };
