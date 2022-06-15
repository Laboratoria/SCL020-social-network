import { login } from '../src/firebase/auth.js';
import { auth, signInWithEmailAndPassword } from '../src/firebase/init.js';

/* // importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
 */

jest.mock('../src/firebase/init.js', () => ({
  auth: jest.fn(() => // La funcion jest.fn <- Crea una funcion interceptada por JEST
    ({ auth: 'TEST' })),

  signInWithEmailAndPassword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }

    Promise.resolve({ user: 'admin' });
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
