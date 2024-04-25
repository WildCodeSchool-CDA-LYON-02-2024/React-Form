import { useState } from "react";
import Form from "./components/Form/Form";
import InputPassword from "./components/Input/InputTheme/InputPassword";
import Input from "./components/Input/Input";

// Composant App
const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    date: "",
    password: "",
    radioOption: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setErrors({ submit: "Failed to submit form" });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleError = (error) => {
    console.error("Form submission error:", error.message);
  };

  return (
    <div>
      <Form
        title="Animal"
        onSubmit={handleSubmit}
        onError={handleError}
        className="basic-form"
      >
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <InputPassword
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        ></InputPassword>
        <label htmlFor="">
          <input
            type="radio"
            name="radioOption"
            value="option1"
            checked={formData.radioOption === "option1"}
            onChange={handleChange}
          ></input>{" "}
          Click here here here here
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="radioOption"
            value="option2"
            checked={formData.radioOption === "option2"}
          ></input>{" "}
          Click here here here here
        </label>
        <Input type="password" placeholder="password" />
        <button>login</button>
      </Form>

      {errors.submit && <p>{errors.submit}</p>}
    </div>
  );
};

export default App;
