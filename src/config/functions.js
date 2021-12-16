import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpi9rxOaJlD77YZxyQNTfYVO9Xcegd1Bc",
    authDomain: "my-application-972ce.firebaseapp.com",
    projectId: "my-application-972ce",
    storageBucket: "my-application-972ce.appspot.com",
    messagingSenderId: "506339359719",
    appId: "1:506339359719:web:44fd4df8d025e4f3471b42",
    measurementId: "G-34KVL5WPKB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


let userLogin = (obj) => {
    console.log(obj);
};

let signUp = (obj, navigate) => {
    console.log(obj);
    return (dispatch) => {
        const user = createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCredential) => {
                // Signed in
                  const user = userCredential.user;
                console.log(user);
                  let uid = user.uid;
                  dispatch({
                    type: "SIGNUPDATA",
                    uid,
                  });
                  navigate("/");

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    };
};

export { userLogin, signUp };