import { useEffect, useState } from "react";
const User = () => {
  const [fname, setName] = useState({ name: "test", location: "test" });
  useEffect(() => {
    //fetchData();
    const timer = setInterval(() => {
        console.log("Testing");
      }, 1000);

      return () => {
        console.log('UseEffect return');
        clearInterval(timer);
      }
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/subhanbasha9494");
    const json = await data.json();
    console.log(json);
    setName(json); 
  };
  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h2>Name: {fname.login}</h2>
      <h2>Location:{fname.created_at}</h2>
    </div>
  );
};

export default User;
