
// import { useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function About() {
  // const pixstyle= {
  //     fontSize:"12px"
  // }
  const navigate = useNavigate();
  const [userShow, setUserShow]=useState(true)
// const [userShowNAME, setUserShowNAME]=useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUserShow(true);
            //  setUserShowNAME(`Welcome Back ${user.email}`);
              // ...
              console.log("uid", uid)

            } else {
              // User is signed out
              // ...
              console.log("user is logged out");
              setUserShow(false);
              // setUserShowNAME(`Login to View Your Dream Journal`);

            }
          });
         
    }, [])

function navigateNewForm(){
  navigate('/new')

}

function navigateJournal(){
  navigate('/dreams')

}


  return (
    <div className="homePAge">

{/* FUTURE, PUT API WITH LATEST GOOD MOTIVATIONAL HAPPY QUOTES */}
{userShow ? <strong>We Hope you have rested well</strong>   :  null  }
{/* {userShow ?     :  null   } */}


{userShow ?<div> <button onClick={navigateNewForm}>New Dream</button><button onClick={navigateJournal}>Dream Journal</button> </div>:<strong>Please Login to View Dream Journal</strong>
}
      

    </div>
  );
}

export default About;
