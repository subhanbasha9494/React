import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="list">
      <div className="sub-items">
        <div>{data[0].name}</div>
        <div>{String.fromCodePoint("0x1f603")}</div>
      </div>
      <div className="text-center">
        {data[0].items.map((item) => (
          <ItemList key={item.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
