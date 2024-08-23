
  
const RestroCard = ({ resName }) => {
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <h3>{resName}</h3>
      </div>
    );
  };

  //Higher Order Component

  //input - Restaurantcard => RestaurantCard Promoted

  export const withPromotedLabel = (RestroCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-block text-white">Promoted</label>
          <RestroCard {...props}/>
        </div>
      )
    }
  }

  export default RestroCard;