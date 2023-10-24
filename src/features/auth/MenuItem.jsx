import { useEffect, useState } from "react";
// import menu1 from "../../assets/images/menu1.png";
// import menu2 from "../../assets/images/menu2.png";
// import menu3 from "../../assets/images/menu3.png";
import Button from "../../components/Button";

import useAdmin from "../../hooks/use-admin";
import useUser from "../../hooks/use-user";

import "../../styles/menu.scss";

export default function MenuItem() {
  const [getMenu, setGetMenu] = useState([]);
  const { getAllMenu, addToCart } = useAdmin();
  // const { addToCart } = useUser();

  const handleAddToCart = (id) => {
    console.log("hahaha");
    // console.log(menu.id);
    const targetMenu = getMenu.find((x) => x.id === id); //body เอาไปใส่ใน addToCart menu
    addToCart(targetMenu);
  };

  useEffect(() => {
    getAllMenu()
      .then((menuData) => {
        setGetMenu(menuData.data.foundMenu);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {getMenu.map((menu, id) => (
        <div key={id} className="box">
          <img
            className="menu-img"
            src={menu.picture}
            alt={menu.name}
          />
          <div className="menu-detail-wrapper">
            <div className="textBox">
              <h1>{menu.name}</h1>
              <div className="menu-border" />
              <p className="price">{menu.price} Baht.</p>
              <Button
                name="Add"
                onClick={() => {
                  handleAddToCart(menu.id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
