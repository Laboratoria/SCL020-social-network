import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import firebaseConfig from './config';
initializeApp(firebaseConfig);
const auth = getAuth();

export {
  initializeApp,
  getAnalytics,
  auth,
  firebaseConfig,
}