import React from "react";
import { Card, Label, Image, Dimmer } from "semantic-ui-react";

const CategoriesList = (props) => {
  const src = "https://react.semantic-ui.com/images/wireframe/image.png";
  return (
    <Card.Group doubling className="CardsList" itemsPerRow={6}>
      {props.data.map((item) => {
        return (
          <Card className="card">
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
