import Axios from "axios"
import { useEffect, useState } from "react";
import StarshipCard from "../StarshipCard";

function StarwarsAPI() {
const [starship, setStarship] = useState([])
useEffect(()=>{Starwars()})  

  function Starwars() {
    Axios("https://swapi.dev/api/starships/").then((response) => {
      console.log(response);
      const data = response.data.results;
      console.log(data)
      
      setStarship(data);
     
     });  

  }




  return (
   
        <section classname= "container1">
        {starship.map((key,index) => {
        return  <StarshipCard data={key} key={index}/> 
      } )}
      </section>
    
  );
}

export default StarwarsAPI;
