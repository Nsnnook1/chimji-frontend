import "../styles/button.scss";

export default function Button({ name, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
}
