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


describe('Tests for the signInUser function', () => {
  // toHaveBeenCalled y toHaveBennCalledWith solo sirven para funcion Mock
  it('Should call signInWithEmailAndPassword', async () => {
    await signInUser(auth, email, password);
    // Revisamos si durante la ejecucion de signInUser
    // se invoco la funcion singInWithEmailAndPassword
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});