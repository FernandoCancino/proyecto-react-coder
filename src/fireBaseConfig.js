// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore }  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARoRh4btTvuF_tv3-_n4Djhtzz1e4FF5Q",
    authDomain: "proyecto-react-coder-abb5c.firebaseapp.com",
    projectId: "proyecto-react-coder-abb5c",
    storageBucket: "proyecto-react-coder-abb5c.appspot.com",
    messagingSenderId: "84872450387",
    appId: "1:84872450387:web:3dd2137516204c4be891a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app)

export default db