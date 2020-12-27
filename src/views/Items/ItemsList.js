import React from "react";
import { Item } from 'semantic-ui-react'

const ItemList = (props) => {
    const src = "https://react.semantic-ui.com/images/wireframe/image.png";
    return (
        <Item.Group divided>
            {props.data.map((item) => {
                return (
                    <Item key={item.id}>
                        <Item.Image src={item.image || src} size='tiny'/>
                        <div className="itemscontent">
                            <Item.Content>
                                <Item.Header className="itemheader">{item.name}</Item.Header>
                                <Item.Meta>
                                    <span className='itemprice'>{item.price}</span>
                                </Item.Meta>
                                <Item.Description>{item.description}</Item.Description>
                            </Item.Content>
                        </div>
                    </Item>
                );
            })}
        </Item.Group>
    );
}

export default ItemList