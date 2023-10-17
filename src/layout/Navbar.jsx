import { Link } from "react-router-dom";

export default function Navbar({ title, href ,onClick}) {
  return (
    <div>
      <Link to={href} onClick={onClick}>{title}</Link>
    </div>
  );
}
