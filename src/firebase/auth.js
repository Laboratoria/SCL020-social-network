import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "./init.js";

// Iniciar Sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    throw error.message;
  }
};

// Registro de usuario
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    throw error.message;
  }
};

// Cerrar sesion
const logout = async (auth) => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error.message;
  }
};

export { login, logout, signup };


