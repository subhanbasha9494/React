import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemData }) => {
  const dispatch = useDispatch();
  //Dispatch an action
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <ul>
        <li>{itemData.name}</li>
      </ul>
      <button className="btn" onClick={() => handleAddItem(itemData)}>
        ADD
      </button>
    </div>
  );
};

export default ItemList;
