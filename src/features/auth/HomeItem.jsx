import dessert4 from "../../assets/images/dessert4.jpg";
import dessert3 from "../../assets/images/dessert3.jpg";
import Button from "../../components/Button";

import "../../styles/home.scss";

export default function HomeItem() {
  return (
    <div className="home">
      <header className="home-header">Bekery</header>

      <div className="home-box">
        {/* <Button name="CLICK ME" className="home-button" /> */}
        <img src={dessert4} className="home-img" />
      </div>

    </div>
  );
}
