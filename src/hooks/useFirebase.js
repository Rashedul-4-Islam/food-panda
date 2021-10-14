import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //      console.log(result.user);
        //      setUser(result.user)
        // }).catch(error =>{
        //     setUser(error.message)
        // })
    }
    const logOut = () =>{
        signOut(auth).then(() => {
              setUser({})
          });
    }
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])

    return {
        user,
        logOut,
        logInWithGoogle
    }
}

export default useFirebase;