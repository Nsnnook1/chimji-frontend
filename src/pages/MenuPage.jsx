import MenuItem from "../features/auth/MenuItem";
import cartIcon from "../assets/icons/cart.png";
export default function MenuPage() {
  return (
    <div>
      <div className="menu">
      <header className="menu-header">Menu</header>
      <img src={cartIcon} className="cartIcon"/>
      </div>
      <MenuItem />
    </div>
  );
}
