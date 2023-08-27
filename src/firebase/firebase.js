// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDnm6AkrznDEbJ88H-PRYLWNE9bN5viEQw",
  authDomain: "cryptoinfo-2ee18.firebaseapp.com",
  projectId: "cryptoinfo-2ee18",
  storageBucket: "cryptoinfo-2ee18.appspot.com",
  messagingSenderId: "863673931773",
  appId: "1:863673931773:web:3fe0a43c40a2b0eddcab94",
  measurementId: "G-L04MBPJGBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const dbCheckIfNotExists = async (key) => {
    const itemRef = doc(db, "users", `${key}`);
    const docSnap = await getDoc(itemRef);

    if (docSnap.exists()) {
        return true
    }
    return false
}
