import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export let AuthContext = createContext();

const AuthtProvider = ({ children }) => {

    let auth = getAuth(app);

    let [user, setUser] = useState(null);
    let [loader, setLoader] = useState(true);

    let googleProvider = new GoogleAuthProvider();
    let githubProvider = new GithubAuthProvider();

    // create user used email and password

    let createUser = (email, password) => {

        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // login with email and password

    let loginWithEmailandPassword = (email, password) => {

        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

      // onAuthState change

      useEffect( ()=>{

        let unSubscribe=onAuthStateChanged(auth,(CurrentUser)=>{

                  setUser(CurrentUser);
                  setLoader(false);

        });

        return ()=>{
                  
            unSubscribe();
        }

    } ,[])

    // sign out 

    let LogOut=()=>{

        setLoader(true);
        return signOut(auth);
    }


    // update profile name and image ....

     let name_image=(name,photo)=>{

        console.log(name,photo);


        
        setLoader(true);
      return   updateProfile(auth.currentUser, {

            displayName: name, photoURL: photo


          })

     }

    // login with Google popup

    let googleLoginPopUP = () => {

        setLoader(true);
        return signInWithPopup(auth, googleProvider);


    }

    // login with Github popup

    let githubLoginPopUP = () => {

        setLoader(true);
        return signInWithPopup(auth, githubProvider);


    }

    let authInfo = { createUser, googleLoginPopUP, githubLoginPopUP, loginWithEmailandPassword , LogOut,user,loader,name_image}

    return (

        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthtProvider;