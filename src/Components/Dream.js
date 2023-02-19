// import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import DreamDetails from "./DreamDetails";
function Dream({ individualdreamID, isGoodQ, name, date, description, topic, night, index }) {
  // const { v4: uuidv4 } = require('uuid');
//   const {id} = useParams();
//   const [show, setShow] = useState(false);   @@@@@@@@@@@@@@@@@
// //   const navigate = useNavigate();
// const API = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     axios
//       .get(`${API}/dreams/${individualdreamID}`)
//       .then((response) => {
//         setdream(response.data);
//       })
//       .catch((err) => {
//         // navigate("/not-found");
//         console.log(err);
//       });
//   }, [API,individualdreamID]);
  return (
<>
<tbody>
    <tr>
        <td>DREAM# {index+=1}</td>
    <td><Link to={`/dreams/${individualdreamID}`}>{name}</Link></td>
    <td>{topic}</td>
    </tr>
    </tbody>
{/* <button onClick={setShow(!show)}>Show Deam Details</button>

{show ? <DreamDetails /> : null} */}

</>

  );
}

export default Dream;
