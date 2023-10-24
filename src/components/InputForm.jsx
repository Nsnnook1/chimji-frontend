import "../styles/input.scss";

export default function InputForm({
  type = "text",
  placeholder,
  label,
  onChange,
  message,
  value,
}) {
  return (
    <div>
      <p>{label}</p>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      
      />
      <span className="text-red-500">{message}</span>
    </div>
  );
}
