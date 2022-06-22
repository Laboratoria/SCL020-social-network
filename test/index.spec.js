import {
  describe, expect, it, vi,
} from 'vitest';
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, signInWithPopup, onAuthStateChanged,
} from 'firebase/auth';
import {
  login, create, out, google, validateState,
} from '../src/firebase/auth.js';
import { auth, provider } from '../src/firebase/init.js';

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => // La funcion jest.fn <- Crea una funcion interceptada por JEST
    ({ getAuth: 'TEST' })),
  GoogleAuthProvider: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  updateProfile: vi.fn(),
  sendEmailVerification: vi.fn(),
  signOut: vi.fn(),
  signInWithPopup: vi.fn(),
  onAuthStateChanged: vi.fn(),
  User: vi.fn(),
}));

// login function
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

// create function
describe('Tests for the create function', () => {
  const userName = 'admin';
  const email = 'admin@test.com';
  const pass = 'admin123';

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
  it('Should call updateProfile', async () => {
    await create(userName, email, pass);
    expect(updateProfile).toHaveBeenCalled();
  });
  it('Should call updateProfile with the current user, diplayName and photoURL arguments', async () => {
    await create(userName, email, pass);
    expect(updateProfile).toHaveBeenCalledWith(auth.currentUser, {
      displayName: userName,
      photoURL: '/img/main-avatar.png',
    });
  });
});

// out function
describe('Tests for the signOut function', () => {
  it('it should call signOut', async () => {
    await out();
    expect(signOut).toHaveBeenCalled();
  });
  it('it should call signOut with auth argument', async () => {
    await out();
    expect(signOut).toHaveBeenCalledWith(auth);
  });
  it('Should throw an error if executed without arguments', async () => {
    try {
      await out();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});

// google function
describe('Tests for the google function', () => {
  it('it should call signInWithPopup function', async () => {
    await google();
    expect(signInWithPopup).toHaveBeenCalled();
  });
  it('it should call signInWithPopup with auth and provider arguments', async () => {
    await google();
    expect(signInWithPopup).toHaveBeenCalledWith(auth, provider);
  });
  it('Should throw an error if executed without arguments', async () => {
    try {
      await google();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});

// validateState function
describe('Tests for the validateState function', () => {
  const next = 'route';
  const pathname = 'path';
  
  it('it should call onAuthStateChanged function', () => {
    validateState(next, pathname);
    expect(onAuthStateChanged).toHaveBeenCalled();
  });
  it('it should call onAuthStateChanged function with auth and callback ', () => {
    validateState(next, pathname);
    expect(onAuthStateChanged).toHaveBeenCalledWith(auth, (User) => {
      if (User) {
        next(pathname);
      } else {
        next('/');
      }
    });
  });
});
