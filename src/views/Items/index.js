import React from "react"
import ItemList from "./ItemsList";
import { useLocation, useParams } from 'react-router-dom';

const ItemsList = (props) => {

    const data = [
        {
            id: 1,
            name: "Arrowhead Valley Camp",
            price: "$12",
            description: "",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg",
            categoryId: 1
        },
        {
            id: 2,
            name: "",
            price: "",
            description: "",
            image: "",
            categoryId: 1
        },
        {
            id: 3,
            name: "",
            price: "",
            description: "",
            image: "",
            categoryId: 1
        },
        {
            id: 4,
            name: "",
            price: "",
            description: "",
            image: "",
            categoryId: 2
        }
    ]
    let location = useLocation();
    
    if(location.categoryid!==undefined){
    const filterdata = data.filter(items => items.categoryId===location.categoryid);
    return <ItemList data={filterdata}/>;
    }

    return <ItemList data={data}/>;
}

export default ItemsList