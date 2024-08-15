import RestroCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
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
    console.log(json);
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
      }
    ];
    setListOfres(data1);
    setFilterRes(data1)
  };

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
              console.log(searchText);
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
            setListOfres(filteredVal);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((res) => (
          <RestroCard resName={res.name} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
