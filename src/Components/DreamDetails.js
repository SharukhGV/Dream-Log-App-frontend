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
  const [thecolor, setthecolor] = useState("black");

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


// let thecolordeterminate = "black"
// if(dream.good_dream === "good")

  const textcoloring= {
    color: thecolor
}

useEffect(()=>{
  if(dream.good_dream === "good"){
  setthecolor("green")}
  if(dream.good_dream === "bad"){
    setthecolor("orange")}
    if(dream.good_dream === "neutral"){
      setthecolor("black")}

},[dream.good_dream])


  return (
    
    <article className="cardContact" key={dream.id}>
      <fieldset style={textcoloring}>
        <legend><strong>Everyone has Dreams...</strong></legend>

        <table className="thedreamtableSHOW">
  <tr>
    <th>Category</th>
    <th>Information</th>
  </tr>
  <tr>
    <td>Name: </td>
    <td>{dream.name}</td>
  </tr>
  <tr>
    <td>Date: </td>
    <td>{moment(dream.date).format('YYYY-MM-DD')}</td>
  </tr>
  <tr>
    <td>Emotions after Waking up: </td>
    <td>{dream.good_dream}</td>
  </tr>
  <tr>
    <td>Description of Dream</td>
    <td>{dream.dream_description}</td>
  </tr>
  <tr>
    <td>General Topic</td>
    <td>{dream.topic}</td>
  </tr>
  <tr>
    <td>Night-Time Dream: </td>
    <td>{dream.night ? <div>🌙 Yes, Night Time</div> : <div>No, Day Time ☀️</div>}</td>
  </tr>
  
</table>
       
      </fieldset>

      <div className="showNavigation">
        <span>
          <Link to={`/dreams`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/dreams/${dream.id}/edit`}>
            <button className="editbutton">Edit</button>
          </Link>
        </span>
        <span>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </span>
      </div>

      {/* <p>THE THREE TYPES OF ISLAMIC DREAMS
Dreams are broken into three parts according to the Sunnah:
Ru'yaa - good visions (dreams)
Hulum - bad dreams
Dreams from one's self</p> */}
    </article>
  );
}

export default DreamDetails;