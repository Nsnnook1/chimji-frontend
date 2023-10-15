import { useState } from "react";
import InputForm from "../../components/InputForm";
import "../../styles/register.scss";

export default function RegisterForm() {
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

  return (
    <div className="register">
      <h1>RegisterForm</h1>

      <form className="registerwrapper" onSubmit={handleInputChange}>
        <div className="inputForm">
          <InputForm
            placeholder="FirstName"
            label="FirstName"
            value={formData.firstname}
            onChange={(e) => handleInputChange(e, "firstname")}
          />
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
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <InputForm
            placeholder="Confirm Password"
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
      </form>
    </div>
  );
}
