import axios from "axios";
import { useState, useEffect } from "react";
import Dream from "./Dream";

function Dreams(){
   
      const [dreams, setdreams] = useState([]);
      const API = process.env.REACT_APP_API_URL;
    
      useEffect(() => {
        axios
          .get(`${API}/dreams`)
          .then((response) => setdreams(response.data))
          .catch((e) => console.error("catch", e));
      }, [API]);
    console.log(dreams)
      return (
        <table>
          <thead>
    <tr>
    <th>Dream Number</th>
    <th>Dream Name</th>
    <th>Topic</th>
  </tr></thead>
              {dreams.map((individualdreams, index) => {

                return (
                  
                  <Dream
                    key={individualdreams.id} individualdreamID={individualdreams.id} date={individualdreams.date} name={individualdreams.name} isGoodQ={individualdreams.good_dream} description={individualdreams.dream_description} topic={individualdreams.topic} night={individualdreams.night} index={index}
                  />
                );
              })}
         
        </table>
      );
    }
    

export default Dreams;