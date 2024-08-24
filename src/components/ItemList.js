import { useContext } from 'react';
import UserContext from '../utils/UserContext';


const ItemList = ({itemData}) => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <ul>
            <li>{itemData.name}</li>
        </ul>
    )
}

export default ItemList;