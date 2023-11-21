import HomeItem from "../features/auth/HomeItem";
// import home from "../assets/images/home.png";
import "../styles/home.scss";

export default function HomePage() {
  return (
    <div className="bg-img">
      {/* style={{ backgroundImage: `url(${home})` }} */}
      <HomeItem />
    </div>
  );
}
