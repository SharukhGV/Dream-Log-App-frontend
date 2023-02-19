import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const API = process.env.REACT_APP_API_URL;

function DreamEditForm() {
  let { id } = useParams();
  // console.log(dream)
  //dreams is the previous data populated into the form

  const [dream, setdream] = useState({
    name: "",
    good_dream: "",
    dream_description: "",
    date: "2023-01-06T05:00:00.000Z",
    topic:"",
    night: false,
  });
  
  console.log(dream)

  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${API}/dreams/${id}`)
      .then((response) => {
        console.log(response.data);
        setdream(response.data);
       
      })
      .catch((e) => console.error(e));
  }, [id]);



  const handleTextChange = (event) => {

    if (event.target.id === "night") {
        setdream({ ...dream, [event.target.id]: event.target.value === "true" });
      } else {
        setdream({ ...dream, [event.target.id]: event.target.value });
      }
    setdream({ ...dream, [event.target.id]: event.target.value });
  };


  const updatedream = (id, dream) => {
      console.log(dream)

    axios
      .put(`${API}/dreams/${id}`, dream)
      .then((response) => {
        // setdream(response.data); // set the entire `dream` object
        navigate(`/dreams/${id}`);
      })
      .catch((e) => console.error("catch", e));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    updatedream(id, dream);
    console.log(dream)

  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dream.name}
          type="text"
          onChange={handleTextChange}
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
      <Link to={`/dreams/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default DreamEditForm;
