import { useState } from "react";
import useAdmin from "../hooks/use-admin";
import Button from "./Button";
import InputForm from "./InputForm";
import "../styles/admin/adminMenu.scss";

export default function ModalFrom({ type, id }) {
  const [input, setInput] = useState({
    name: "",
    detail: "",
    price: "",
    picture: null,
  });
  console.log("ID AT THAT MODAL", id);

  const { addMenu, editMenu } = useAdmin();

  const handleInputMenu = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("picture", input.picture); //ชื่อ key Image เชื่อมกับ Back
    formData.append("name", input.name);
    formData.append("detail", input.detail);
    formData.append("price", input.price);

    if (type === "edit") {
      editMenu(formData, id).catch((err) => {
        console.log(err);
      });
    } else {
      addMenu(formData).catch((err) => {
        console.log(err);
      });
    }
    window.location.reload();
  };

  return (
    <div>
      <h1>Management Menu</h1>
      <form onSubmit={handleInputMenu}>
        <InputForm
          label="name"
          placeholder="name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <InputForm
          label="detail"
          placeholder="detail"
          value={input.detail}
          onChange={(e) => setInput({ ...input, detail: e.target.value })}
        />
        <br />
        <InputForm
          label="price"
          placeholder="price"
          value={input.price}
          onChange={(e) => setInput({ ...input, price: e.target.value })}
        />
        <br />
        <InputForm
          type="file"
          label="picture"
          placeholder="picture"
          onChange={(e) => {
            setInput({ ...input, picture: e.target.files[0] });
          }}
        />
        <br />
        <div className="modal-botton-wrapper">
          <Button name="Add" className="modal-button" />
        </div>
      </form>
    </div>
  );
}
