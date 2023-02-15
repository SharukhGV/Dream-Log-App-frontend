import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DreamDetails({individualdreams,index}){

  const API = process.env.REACT_APP_API_URL;
  const [dream, setdream] = useState([]);
  let {id} = useParams();
  const navigate = useNavigate();

  // useEffect(() => {}, []);
  // const API = process.env.REACT_APP_API_URL;

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
  const handleDelete = () => {
    axios
      .delete(`${API}/dreams/${id}`)
      .then(() => {
        navigate(`/dreams`);
      })
      .catch((error) => console.error(error));
  };
  return (
    <article key={individualdreams.id}>
      <fieldset>
        <legend> dream #{index}</legend>
        <h3>
          <strong>Name:</strong> {individualdreams.name}
        </h3>
        <h3>
          <strong>Date:</strong> {individualdreams.date}
        </h3>
        <h3>
          <strong>Was your Dream Good?:</strong> {individualdreams.good_dream ? <div>true</div> : <div>false</div>}
        </h3>
        <h3>
          <strong>Dream Description:</strong> {individualdreams.dream_description}
        </h3>
        <h3>
          <strong>Topic of Dream:</strong> {individualdreams.topic}
        </h3>
        <h3>
          <strong>Occured at Night?:</strong> {individualdreams.night ? <div>true</div> : <div>false</div>}
        </h3>
      </fieldset>

      <div className="showNavigation">
        <span>
          <Link to={`/dreams`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/dreams/${id}/edit`}>
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