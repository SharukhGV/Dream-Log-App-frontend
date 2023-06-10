import { useEffect, useState,signOut } from "react";
// import { auth } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";

function AuthDetails(){
const [authUser,setAuthUser]=useState(null)

useEffect(()=>{
    const listen = onAuthStateChanged(auth,(User)=>{
        if(user){
            setAuthUser()
        }
        else setAuthUser(null)
    })
    return () =>{
        listen()
    }
},[])

// const userSignOut = () =>{

//     signOut(auth.then(()=>{console.log("signed out successfully")}))
// .catch((error)=>{console.log(error)})}
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
    console.log(error)
  // An error happened.
});


return(
    <div>{authUser ? <p>{`Signed In As ${authUser.email}`} <button onClick={signOut}>Sign Out</button></p>: <p>Signed Out</p>}</div>
)


}

export default AuthDetails