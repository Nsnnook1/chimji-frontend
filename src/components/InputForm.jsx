import "../styles/input.scss";

export default function InputForm({
  type = "text",
  placeholder,
  label,
  onChange,
  // hasErr,
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
        // className={`${
        //   hasErr
        //     ? "border-red-500 focus:ring-red-300"
        //     : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"
        // }
        // `}
      />
      <span className="text-red-500">{message}</span>
    </div>
  );
}
