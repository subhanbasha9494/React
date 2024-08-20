import RestroCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  
  const [listOfrestaurents, setListOfres] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    //console.log(json);
    const data1 = [
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
    ];
    setListOfres(data1);
    setFilterRes(data1);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Check Internetconnection</h1>;

  return listOfrestaurents.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-btn"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterResList = listOfrestaurents.filter((res) =>
                res.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilterRes(filterResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredVal = listOfrestaurents.filter(
              (res) => res.average > 4
            );
            setFilterRes(filteredVal);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((res) => (
          <Link key={res.id} to={"/restaurants/" + res.id}>
            <RestroCard resName={res.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
