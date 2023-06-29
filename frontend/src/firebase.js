// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDdGpcR1Q6jtekrDCRgCi_B0yRtWh2M_0M',
  authDomain: 'auth-c4b47.firebaseapp.com',
  projectId: 'auth-c4b47',
  storageBucket: 'auth-c4b47.appspot.com',
  messagingSenderId: '1032929190855',
  appId: '1:1032929190855:web:638d236557b663952f6fe2',
  measurementId: 'G-C1WRQLLHVP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
