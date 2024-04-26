import { useState } from "react";
import "./InputTheme.css";
import eye from "../../../assets/eye.svg";
import eyeOff from "../../../assets/eye-off.svg";

export function InputPassword({ ...restProps }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="input__wrapper">
        <input {...restProps} type={passwordVisible ? "text" : "password"} />

        <img
          alt="Eye Icon"
          title="Toggle Password Visibility"
          src={passwordVisible ? eye : eyeOff}
          className="input__icon"
          onClick={togglePasswordVisibility}
        />
      </div>
    </>
  );
}
