import { useState } from "react";
import "./InputPassword.css";
import eye from "../../assets/eye.svg";
import eyeOff from "../../assets/eye-off.svg";

function InputPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="input__wrapper">
        <input
          id="password"
          type={passwordVisible ? "text" : "password"}
          className="input__field"
          placeholder="Your Password"
        />
        <label htmlFor="password" className="input__label">
          Password
        </label>
        <img
          alt="Eye Icon"
          title="Toggle Password Visibility"
          src={passwordVisible ? eyeOff : eye}
          className="input__icon"
          onClick={togglePasswordVisibility}
        />
      </div>
    </>
  );
}

export default InputPassword;
