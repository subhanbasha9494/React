import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
};

export default useRestaurantMenu;