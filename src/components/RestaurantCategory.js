import ItemList from "./ItemList";
import Accordion from 'react-bootstrap/Accordion';
const RestaurantCategory = ({ data }) => {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header> <div>{data[0].name}</div></Accordion.Header>
      <Accordion.Body>
      {data[0].items.map((item) => (
                <ItemList key={item.id} itemData={item} />
              ))}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
  );
};

export default RestaurantCategory;
