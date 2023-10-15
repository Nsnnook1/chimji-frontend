import dessert1 from "../../assets/images/dessert1.jpg";
import dessert2 from "../../assets/images/dessert2.jpg";
import dessert3 from "../../assets/images/dessert3.jpg";

const desserts = [dessert1, dessert2, dessert3];

const product = [
  {
    product_name: "ชื่อสินค้า 1",
    price: 10.99,
    description: "รายละเอียดสินค้า 1",
  },
  {
    product_name: "ชื่อสินค้า 2",
    price: 12.99,
    description: "รายละเอียดสินค้า 2",
  },
  {
    product_name: "ชื่อสินค้า 3",
    price: 14.99,
    description: "รายละเอียดสินค้า 3",
  },
];

const randomImage = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export default function MenuItem() {
  return (
    <div className="container">
      {product.map((item) => (
        <div className="box">
          <img src={desserts[randomImage(0, 3)]} />
          <div className="textBox">
            <h1>{item.product_name}</h1>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
