import { useState } from "react";
import { toast } from "react-toastify";
import useAdmin from "../hooks/use-admin";
import Button from "./Button";
import InputForm from "./InputForm";
import axios from "axios";

export default function ModalFrom() {
  const [input, setInput] = useState({
    name: "",
    detail: "",
    price: "",
    picture: "",
  });
  const { addMenu } = useAdmin();

  const handleInputMenu = (e) => {
    e.preventDefault();
    addMenu(input).catch((err) => {
      toast.error(err.response?.data.msg);
    });
  };

  return (
    <div>
      <form onSubmit={handleInputMenu}>
        <InputForm
          label="name"
          placeholder="name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <InputForm
          label="detail"
          placeholder="detail"
          value={input.detail}
          onChange={(e) => setInput({ ...input, detail: e.target.value })}
        />
        <InputForm
          label="price"
          placeholder="price"
          value={input.price}
          onChange={(e) => setInput({ ...input, price: e.target.value })}
        />
        <InputForm
          label="picture"
          placeholder="picture"
          value={input.picture}
          onChange={(e) => setInput({ ...input, picture: e.target.value })}
        />
        <Button name="Add" className="modal-button" />
      </form>
    </div>
  );
}
