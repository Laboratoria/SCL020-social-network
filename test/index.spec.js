import {
  describe, expect, it, vi,
} from 'vitest';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { login, create } from '../src/firebase/auth.js';
import { auth } from '../src/firebase/init.js';
// import { vi as jest } from 'vitest';
 
/* import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../src/firebase/auth.js';
import { auth } from '../src/firebase/init.js'; */
 
/*  */
 
 
/* const objetoDisplay = {displayName: 'chao'} */
vi.mock('../src/firebase/init.js', () => ({
  auth: vi.fn(() => // La funcion jest.fn <- Crea una funcion interceptada por JEST
    ({ user: 'authTEST', currentUser: 'current' })),
 
}));
 
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => // La funcion jest.fn <- Crea una funcion interceptada por JEST
    ({ getAuth: 'TEST' })),
  GoogleAuthProvider: vi.fn(() => // La funcion jest.fn <- Crea una funcion interceptada por JEST
    ({ getAuth: 'TEST' })),
  signInWithEmailAndPassword: vi.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }
    Promise.resolve({ user: 'admin' });
  }),
  createUserWithEmailAndPassword: vi.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }
    Promise.resolve({ currentUser: 'admin' });
  }),
  updateProfile: vi.fn((auth, object) => {
  /*if (!auth) {
    throw new Error('ERROR');
    } */
    Promise.resolve({ currentUser: 'admin' });
  }),
 sendEmailVerification: vi.fn((auth) => {
    if (!auth) {
      throw new Error('ERROR');
    }
    Promise.resolve({ currentUser: 'admin' });
  }),
 
}));
 
 
describe('Tests for the login function', () => {
  const email = 'admin@test.com';
  const pass = 'admin123';
 
  // toHaveBeenCalled y toHaveBennCalledWith solo sirven para funcion Mock
  it('Should call signInWithEmailAndPassword', async () => {
    await login(email, pass);
    // Revisamos si durante la ejecucion de login se invoco la funcion singInWithEmailAndPassword
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
 
  it('Should call signInWithEmailAndPassword with the auth, email and pass arguments', async () => {
    await login(email, pass);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
 
  it('Should throw an error if executed without arguments', async () => {
    try {
      await login();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});
 
describe('Tests for the create function', () => {
  const userName = 'admin';
  const email = 'admin@test.com';
  const pass = 'admin123';
  const avatarURL = 'img.png'
 
  it('Should call createUserWithEmailAndPassword', async () => {
    await create(userName, email, pass);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
 
  it('Should call createUserWithEmailAndPassword with the auth, email and pass arguments', async () => {
    await create(userName, email, pass);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
  it('Should throw an error if executed without arguments', async () => {
    try {
      await create();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
  it('Should call updateProfile',async () => {
    await create(userName,email,pass);
    expect(updateProfile).toHaveBeenCalled();
  })
}); 
 
/* it('Should call updateProfile with the currentUser and objetoDisplay arguments', async () => {
     const currentUser = 'admin';
    await create(userName, email, pass);
    expect(updateProfile).toHaveBeenCalledWith(auth.currentUser, {userName, avatarURL});
  });
}); */
  /*
  it('Should call sendEmailVerification with currentUser arguments', async () => {
    const currentUser = 'admin';
    await create(userName, email, pass);
    expect(sendEmailVerification).toHaveBeenCalledWith(currentUser);
  }); */

