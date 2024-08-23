import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import RestaurantCategory from './RestaurantCategory';
const RestroMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const params = useParams(); /**useparams we can id dynamically */
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    const data1 = [
      {
        id: "1",
        name: "KFC",
        items: [{id:1,name:"Biryani"},{id:2,name:"Burger"}],
      },
    ];
    setresInfo(data1);
    
  };
  return resInfo === null ? (
    <Shimer />
  ) : (
    <div className="text-center">
          <RestaurantCategory data={resInfo}/>

    </div>
  );
};

export default RestroMenu;
