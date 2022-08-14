import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
    getAuth,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    isSignInWithEmailLink,
    createUserWithEmailAndPassword,
    EmailAuthProvider,
    reauthenticateWithCredential,
    signInWithEmailAndPassword,
    updatePassword,
    signOut,
    connectAuthEmulator
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "self-taught-typescript.firebaseapp.com",
    projectId: "self-taught-typescript",
    storageBucket: "self-taught-typescript.appspot.com",
    messagingSenderId: "206383101928",
    appId: process.env.APPID,
    measurementId: "G-LGGZ1FG8X7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

async function signIn(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
}

async function createUser(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
}

// createUser('nguyennhatthongdev@gmail.com', '0987024119').then(r => {
//     console.log(r);
// })

$('#login-form').on('submit', async function (e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();

    try {
        await signIn(email, password);
        console.log("oke");
    } catch (e) {
        console.log("err sign in function", e);
    }
})
