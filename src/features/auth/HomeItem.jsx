import "../../styles/home.scss";
import home from "../../assets/images/home.png";

export default function HomeItem() {
  return (
    <div className="home" style={{ backgroundImage: `url(${home})` }}>
      {/* <header className="home-header">Bekery</header> */}

      <div className="home-box" />
    </div>
  );
}
