export default function InputForm({
  type = "text",
  placeholder,
  label,
  onChange,
}) {
  return (
    <div>
      <p>{label}</p>
      <input
        placeholder={placeholder}
        type={type}
        style={{ width: "100%", padding: "8px", fontSize: "20px" }}
        onChange={onChange}
      />
    </div>
  );
}

// import "../styles/button.scss";

// export default function Button({ name }) {
//   return <button className="button">{name}</button>;
// }
