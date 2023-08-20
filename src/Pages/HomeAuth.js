// import Profile from "../Components/Profile"

import LogoutButton from "../Components/LogoutButton"

function HomeAuth(){

    const pixstyle= {
        fontSize:"12px"
    }
return(


<div className="homePAge">
    <h1>Welcome to Dream Journal!</h1>
    <p>A Dream Log App Focused on Simplicity</p>
    <p style={pixstyle}>August Kekulé figured out the chemical configuration structure of Benzene. He notably says that he came about this discovery through a dream he had of a snake biting its own tail. August Kekulé, the scientist responsible for this contribution to field of organic chemistry has been proven to be correct today through various spectroscopic techniques.</p> 
    <p style={pixstyle}>Everyone has dreams! This application is a digital journal built to keep track of the dreams that you had while sleeping! In the section about Good dreams, bad dreams, or neutral dreams, it is totally up to User discretion to determine whether their dream was good or bad or neutral. An example of a good dream could be you wake up feeling happy and hopeful. An example of a bad dream could be waking up in a state of terror. A neutral dream could be something you dreamed about that happened in the previous day.
          </p>
    
    <div className="cardContact">
    <h3 >Thank you for Choosing Us!</h3>
    

          
     <LogoutButton/> 
     




    </div>
   


  </div>
    



)



}

export default HomeAuth