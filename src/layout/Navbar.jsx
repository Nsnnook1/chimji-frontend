export default function Navbar({ title, href }) {
  return (
    <div>
      <a href={href}>{title}</a>
    </div>
  );
}
