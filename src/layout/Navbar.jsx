import { Link } from "react-router-dom";

export default function Navbar({ title, href }) {
  return (
    <div>
      <Link to={href}>{title}</Link>
    </div>
  );
}
