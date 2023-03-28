// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmWG2t0g07HHTAz-bW1HdKFf325kCM-Bc",
  authDomain: "chiefs-shop-db.firebaseapp.com",
  projectId: "chiefs-shop-db",
  storageBucket: "chiefs-shop-db.appspot.com",
  messagingSenderId: "36660726043",
  appId: "1:36660726043:web:72fcdb0158b7a64311abbe"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore(); // singleton instance points db

export const createUserDocumentFromAuth = async (userAuth) => {
  // see there is an existig doc reference
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  // if user data NOT exists
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch (error) {
      console.log('error while creating the user', error.message);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;



} 
