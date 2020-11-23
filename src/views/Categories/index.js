import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import CategoriesList from "./CategoriesList";
import Burgers from "../../images/Burgers.jpeg";
const Categories = (props) => {
  const data = [
    {
      id: 1,
      name: "Burgers",
      image: Burgers,
    },
    {
      id: 2,
      name: "Sandwiches & Quesadillas",
      image: "https://www.recipezazz.com/media/photos/photos/6/4/4/6/8/spicy-chicken-quesadilla-sandwich-64468_295x260_b659ee00.jpg",
    },
    {
      id: 3,
      name: "Appetizers",
      image: Burgers,
      image:"https://motherwouldknow.com/wp-content/uploads/2018/04/2018-04-15-mini-muffin-cups-four-sq-IMG_8955-w.jpg"
    },
    {
      id: 4,
      name: "Salads",
      image: "https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2019/05/Simple-Green-Salad-gj-500x500.jpg",
    },
    {
      id: 5,
      name: "Sides",
      image: "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Baked-potato-wedges-4.jpg",
    },
    {
      id: 6,
      name: "Desserts",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&resize=768,574",
    },
    {
      id: 7,
      name: "Milkshakes & Drinks",
      image: "https://bellyfull.net/wp-content/uploads/2020/07/Oreo-Milkshake-blog-3-500x375.jpg",
    },
  ];

  return <CategoriesList data={data} />;
};

export default Categories;
