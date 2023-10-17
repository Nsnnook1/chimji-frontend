import { useState } from "react";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import InputErrorMessage from "./InputErrorMessage";
import Joi from "joi";
import useAuth from "../../hooks/use-auth";
import "../../styles/register.scss";

const registerSchema = Joi.object({
  firstname: Joi.string().trim().required(),
  lastname: Joi.string().trim().required(),

  email: Joi.string().email({ tlds: false }).required(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/) //^ = ขึ้นต้นด้วย 0-9, มี10ตัว
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,20}$/)
    .trim()
    .required(),

  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
}).options({ allowUnknown: true });

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  console.dir(error); //key value
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [error, setError] = useState({});
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    address_name: "",
    district: "",
    subDistrict: "",
    province: "",
    postCode: "",
  });

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleRegisterSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // validateRegister(registerSchema)
    await register(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <h1 className="register-header">RegisterForm</h1>

      <form className="registerwrapper" onSubmit={handleRegisterSubmitForm}>
        <div className="inputForm">
          <InputForm
            placeholder="FirstName"
            label="FirstName"
            value={formData.firstname}
            onChange={(e) => handleInputChange(e, "firstname")}
            hasErr={error.firstname}
          />
          {error.firstname && <InputErrorMessage message={error.firstname} />}

          <InputForm
            placeholder="LastName"
            label="LastName"
            value={formData.lastname}
            onChange={(e) => handleInputChange(e, "lastname")}
          />
        </div>

        <div className="inputForm">
          <InputForm
            placeholder="Email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <InputForm
            placeholder="Mobile"
            label="Mobile"
            value={formData.mobile}
            onChange={(e) => handleInputChange(e, "mobile")}
          />
        </div>

        <div className="inputForm">
          <InputForm
            placeholder="Password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <InputForm
            placeholder="Confirm Password"
            type="password"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange(e, "confirmPassword")}
          />
        </div>

        <div className="inputAddess">
          <InputForm
            placeholder="Address Name"
            label="Address Name"
            value={formData.address_name}
            onChange={(e) => handleInputChange(e, "address_name")}
          />
        </div>

        <div className="address">
          <InputForm
            placeholder="District"
            label="District"
            value={formData.district}
            onChange={(e) => handleInputChange(e, "district")}
          />
          <InputForm
            placeholder="SubDistrict"
            label="SubDistrict"
            value={formData.subDistrict}
            onChange={(e) => handleInputChange(e, "subDistrict")}
          />
          <InputForm
            placeholder="Province"
            label="Province"
            value={formData.province}
            onChange={(e) => handleInputChange(e, "province")}
          />
          <InputForm
            placeholder="PostCode"
            label="PostCode"
            value={formData.postCode}
            onChange={(e) => handleInputChange(e, "postCode")}
          />
        </div>
        <div className="register-button">
          <div>
            <Button name="REGISTER" />
          </div>
        </div>
      </form>
    </div>
  );
}
