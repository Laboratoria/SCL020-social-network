import { navigate } from './router/router.js';
import { validateState } from './firebase/auth.js';

// VISTA LOGIN
validateState().then((validation) => {
  console.log(validation);
  if (validation) {
    navigate('/home');
  } else {
    navigate('/');
  }
});
