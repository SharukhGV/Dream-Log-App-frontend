import axios from "axios";
import { useState, useEffect } from "react";
import DreamDetails from "./DreamDetails";

function Dreams(){
   
      const [dreams, setdreams] = useState([]);
      const API = process.env.REACT_APP_API_URL;
    //   let accumulatorArray = useMemo(() => [], []);
    
      useEffect(() => {
        axios
          .get(`${API}/dreams`)
          .then((response) => setdreams(response.data))
          .catch((e) => console.error("catch", e));
      }, [API]);
    
      return (
        <section>
    
            
    
          <table id="dreams">
            <tbody>
              {dreams.map((individualdreams, index) => {

                return (
                  <DreamDetails
                    individualdreams={individualdreams} index={index}
                  />
                );
              })}
            </tbody>
          </table>
         {/* {dreams.reduce((accumulator,currentValue) =>  accumulator = Number(accumulator) + Number(currentValue.amount) , 0 )
    } */}
        </section>
      );
    }
    

export default Dreams;