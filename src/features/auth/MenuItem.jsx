import menu1 from "../../assets/images/menu1.png";
import menu2 from "../../assets/images/menu2.png";
import menu3 from "../../assets/images/menu3.png";
import Button from "../../components/Button";

import "../../styles/menu.scss";

const desserts = [menu1, menu2, menu3];

const product = [
  {
    product_name: "Menu 01",
    price: 10.99,
    description: "sub detail 01",
  },
  {
    product_name: "Menu 02",
    price: 12.99,
    description: "sub detail 02",
  },
  {
    product_name: "Menu 03",
    price: 14.99,
    description: "sub detail 03",
  },
  {
    product_name: "Menu 04",
    price: 14.99,
    description: "sub detail 04",
  },
  {
    product_name: "Menu 05",
    price: 14.99,
    description: "sub detail 05",
  },
  {
    product_name: "ชื่อสินค้า 6",
    price: 14.99,
    description: "sub detail 06",
  },
];

const randomImage = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export default function MenuItem() {
  return (
    <div className="container">
      {product.map((item, id) => (
        <div key={id} className="box">
          <img
            className="menu-img"
            src={desserts[randomImage(0, 3)]}
            alt={item.product_name}
          />
          <div className="textBox">
            <h1>{item.product_name}</h1>
            <p className="price">{item.price}</p>
            <div className="menu-border" />
            <p>{item.description}</p>
            <Button className="button-add" name="Add"/>
          </div>
        </div>
      ))}
    </div>
  );
}
