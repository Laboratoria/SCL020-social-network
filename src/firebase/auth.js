import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  sendEmailVerification,
} from './init.js';

// State of user
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in:', user);
  } else {
    console.log('user logged out');
  }
});

// Create user with email and password
const create = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      () => {
        sendEmailVerification(auth.currentUser);
      },
    );
  } catch (error) {
    throw error.message;
  }
};

// email validation
sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('revisa tu inbox');
    // ...
  }); 

// Sign in with email and password, la persona ya existe
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

function google() {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. We can use tu access Google APIs
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the users account used
      const email = error.customData.email;
      // The AuthCredential type that was used
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

// Sign out, la persona existe
const out = () => {
  signOut(auth).then(() => {
    console.log('salió');
  });
};

export {
  login, google, create, out,
};

