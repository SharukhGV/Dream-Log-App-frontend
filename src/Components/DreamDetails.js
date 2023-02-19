import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function DreamDetails({individualdreams,index}){
  const {id} = useParams();
// console.log(id)
  const API = process.env.REACT_APP_API_URL;
  const [dream, setdream] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {}, []);
  // const API = process.env.REACT_APP_API_URL;
// let apple = dream
// apple=null
// {null}
  // /promise
  useEffect(() => {
    axios
      .get(`${API}/dreams/${id}`)
      .then((response) => {
        setdream(response.data);
      })
      .catch((err) => {
        // navigate("/not-found");
        console.log(err);
      });
  }, [API,id]);

  // const handleDelete = () => {};
  const deleteDream = () => {
    axios
      .delete(`${API}/dreams/${dream.id}`)
      .then(() => {
        navigate(`/dreams`);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    deleteDream();
  };

  return (
    
    <article key={dream.id}>
      <fieldset>
        <legend> dream #{index}</legend>
        <h3>
          <strong>Name:</strong> {dream.name}
        </h3>
        <h3>
          <strong>Date:</strong> {moment(dream.date).format('YYYY-MM-DD')}
        </h3>
        <h3>
          <strong>Was your Dream Good?:</strong> {dream.good_dream}
        </h3>
        <h3>
          <strong>Dream Description:</strong> {dream.dream_description}
        </h3>
        <h3>
          <strong>Topic of Dream:</strong> {dream.topic}
        </h3>
        <h3>
          <strong>Occured at Night?:</strong> {dream.night ? <div>true</div> : <div>false</div>}
        </h3>
      </fieldset>

      <div className="showNavigation">
        <span>
          <Link to={`/dreams`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/dreams/${dream.id}/edit`}>
            <button>Edit</button>
          </Link>
        </span>
        <span>
          <button onClick={handleDelete}>Delete</button>
        </span>
      </div>
    </article>
  );
}

export default DreamDetails;