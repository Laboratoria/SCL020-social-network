import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getAnalytics, getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js';
import { config } from './config.js';
initializeApp(config);
const auth = getAuth();
export { initializeApp, getAnalytics, auth };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
