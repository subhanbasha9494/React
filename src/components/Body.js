import RestroCard from "./Restaurant";
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
  let listOfrestaurents = [
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
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfrestaurents = listOfrestaurents.filter(
              (res) => res.average > 4
            );
            console.log(listOfrestaurents)
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
