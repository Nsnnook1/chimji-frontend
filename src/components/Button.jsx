import "../styles/button.scss";

export default function Button({ name, onClick, type = "submit" }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {name}
    </button>
  );
}
