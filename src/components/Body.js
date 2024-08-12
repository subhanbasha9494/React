import RestroCard from "./Restaurant";
import { useState } from "react";
const resList = [
  {
    name: "Meghana Foods",
    id: 10,
  },
  {
    name: "Biryani",
    id: 20,
  },
];

const Body = () => {
  const [listOfrestaurents,setListOfres ] = useState([
      {
        id: "12",
        name: "KFC",
        average: "4",
      },
      {
        id: "2",
        name: "DOMINOS",
        average: "5",
      },
    ]) ;
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredVal = listOfrestaurents.filter(
              (res) => res.average > 4
            );
            setListOfres(filteredVal); 
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfrestaurents.map((res) => (
          <RestroCard resName={res.name} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
