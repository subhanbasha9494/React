import RestroCard, { withPromotedLabel } from "./Restaurant";
import { useEffect, useState ,useContext} from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
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

  const RestaurantCardPromoted = withPromotedLabel(RestroCard);

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
        promoted: true,
      },
      {
        id: "2",
        name: "DOMINOS",
        average: "5",
        promoted: true,
      },
      {
        id: "22",
        name: "PIZZA",
        average: "6",
        promoted: false,
      },
      {
        id: "21",
        name: "SANDWICH",
        average: "3",
        promoted: true,
      },
    ];
    setListOfres(data1);
    setFilterRes(data1);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Check Internetconnection</h1>;

  // get the SetUsername from context
  const { loggedInUser, setUserName } = useContext(UserContext);

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
        <div>
          <label>UserName:</label>
          <input type="text" placeholder="userName"  value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="res-container">
        {filterRes.map((res) => (
          <Link key={res.id} to={"/restaurants/" + res.id}>
            {res.promoted ? (
              <RestaurantCardPromoted resName={res.name} />
            ) : (
              <RestroCard resName={res.name} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
