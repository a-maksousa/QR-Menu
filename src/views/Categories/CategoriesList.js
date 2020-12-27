import React from "react";
import { Card, Label, Image } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';
import { ItemsRoute } from "../../Routes";

const CategoriesList = (props) => {
  const history = useHistory();
  const handleClick = (categoryid) => history.push({
    pathname: ItemsRoute,
    categoryid:  categoryid 
});
  const src = "https://react.semantic-ui.com/images/wireframe/image.png";
  return (
    <Card.Group doubling className="CardsList" itemsPerRow={4}>
      {props.data.map((item) => {
        return (
          <Card key={item.id} onClick={() => handleClick(item.id)}>
            <Image src={item.image || src} fluid className="itemImage"/>
            <Label className={"catlabel"} attached="top left">
              {item.name.toUpperCase()}
            </Label>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default CategoriesList;
