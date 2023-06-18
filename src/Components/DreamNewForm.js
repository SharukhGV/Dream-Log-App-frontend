import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { auth } from '../firebase';

const API = process.env.REACT_APP_API_URL;

function DreamNewForm() {
  const [userShow, setUserShow]=useState("")


  useEffect(()=>{
 
          setUserShow(auth.user.uid);
    console.log(auth.user.uid)
     
}, [])


//   let { id } = useParams();
  // console.log(dream)
  //dreams is the previous data populated into the form
  const navigate = useNavigate();

  const addDream = (newDream) => {

  axios
    .post(`${API}/dreams`, newDream)
    .then((response) => {
      console.log(response.data)

      // setdream(response.data); // set the entire `dream` object
      navigate('/dreams');
    })
    .catch((e) => console.error("catch", e));
};

  const [dream, setdream] = useState({
    user_id: userShow,
    name: "",
    good_dream: "",
    dream_description: "",    
    topic:"",
    date: "2000-01-01",
    night: true
  });
  
  console.log(dream)






  const handleTextChange = (event) => {

    // if (event.target.id === "night") {
    //     setdream({ ...dream, [event.target.id]: event.target.value === "true" });
    //   } else {
    //     setdream({ ...dream, [event.target.id]: event.target.value });
    //   }
    setdream({ ...dream, [event.target.id]: event.target.value });
  };


  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addDream(dream);

  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>

      <input type="hidden" id="user_id" name="user_id" value={userShow}></input>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dream.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name your Dream..."

          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          // pattern="http[s]*://.+"
          value={moment(dream.date).format("YYYY-MM-DD")}
          // placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Topic:</label>
        <input
          id="topic"
          type="text"
          name="topic"
          value={dream.topic}
          placeholder="What is the topic or Category of your Dream..."

          onChange={handleTextChange}
        />
        <label htmlFor="good_dream">Type of Dream:</label>

        <select
          onChange={handleTextChange}
          name="good_dream"
          id="good_dream"
          value={dream.good_dream}
          >
          <option value="">--Please choose an option--</option>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </select>

        <label htmlFor="dream_description">Description of Dream:</label>

        <input
          id="dream_description"
          type="text"
          name="dream_description"
          value={dream.dream_description}
          placeholder="What is your Dream about..."

          onChange={handleTextChange}
        />

        <label htmlFor="night">Was it Night Time:</label>

        <select
          onChange={handleTextChange}
          name="night"
          id="night"
          value={dream.night}
          >
          <option defaultValue={true}>true</option>
          <option defaultValue={false}>false</option>
        </select>

       
        <input type="submit" />
      </form>
      <Link to={`/dreams`}>
        <button>Go Back to All Dreams!</button>
      </Link>
    </div>
  );
}

export default DreamNewForm;
