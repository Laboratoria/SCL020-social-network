import {
  auth,
  provider,
 onAuthStateChanged,
  signInWithPopup
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
    console.log(user);
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
  });
}





// export const snapshotProfile = (callback) => {
// 	let autor = '';
// 	onAuthStateChanged(auth, (user) => {  //uso el metodo observador para acceder al usuario que se loguea
// 		console.log(user);
// 		autor = user.email;
// 		const lookPostProfile = query(
// 			collection(db, 'Comentarios'),
// 			where('Autor', '==', autor), 
// 		);// trae los comentadios "donde/where" autor es igual al logueado (accedemos por medio de observador)
// 		console.log(autor);
// 		onSnapshot(lookPostProfile, callback);
// 	});
// };