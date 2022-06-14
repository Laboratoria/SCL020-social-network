import { auth, getRedirectResult, signInWithRedirect, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, onAuthStateChanged, provider } from './firebase.js';
//import { changeRoute } from '../lib/router.js';

// Observador
const gettingActiveUser = (changeRoute, hash) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          changeRoute(hash);
        } else {
          changeRoute('/#home');
        }
      });
    }
    const creatingNewUser = async (userName, email, password) => {
        try {
            const userData = await createUserWithEmailAndPassword(
              auth,
              email,
              password,
            );
            console.log(userData)
          const prueba1 = await updateProfile(auth.currentUser, { 
              displayName: localStorage.getItem(userName),
              //photoURL : localStorage.getItem(userPhoto),
             });
             console.log(prueba1)
          const prueba2 = await sendEmailVerification(auth.currentUser);
            return userData.user;
          } catch (error) {
            // console.log(error);
            throw error.code;
          }
        };
        const signingInWithgoogle = async () => {
            try {
              await signInWithRedirect(auth, provider);
              const userCredential = await getRedirectResult(auth);
              /*then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = provider.credentialFromResult(result);
                const token = credential.accessToken;
            
                // The signed-in user info.
                const user = result.user;
              })*/
              return userCredential.user.uid;
            } catch (error) {
              alert('Error al intentar ingresar con tu cuenta de Google', error);
              return null;
            }
          };
         

        export {creatingNewUser, gettingActiveUser, signingInWithgoogle};