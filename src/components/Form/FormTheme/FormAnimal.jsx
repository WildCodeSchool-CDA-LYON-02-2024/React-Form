// proptypes
import PropTypes from "prop-types";

// inputs
import { Input } from "../../Input/Input";
import { InputPassword } from "../../Input/InputTheme/InputPassword";

//css
import "../Form.css";

export function FormAnimal({ formName,  ...restProps }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="animal-form" {...restProps}>
      
      <h2>{formName}</h2>

      <label> Nom </label>
      <Input placeholder=" Entrez votre nom" />

      <label> Prénom </label>
      <Input placeholder=" Entrez votre prénom" />

      <label> Age de votre animal </label>
      <Input
        placeholder=" Entrez l'age de votre animal"
        type="number"
        max="20"
      />

      <label> Famille de votre animal </label>
      <Input placeholder=" Entrez la famille de votre animal" />

      <label> Email </label>
      <Input type="email" placeholder="Email" errorMessage = "Please a valid email!"/>

      <label> Mot de passe </label>
      <InputPassword placeholder="Password" />

      <div style={{ display: "flex", gap: "10px" }}>
        <input type="checkbox" />
        <label className="labcheck">
          {" "}
          J&apos;accepte de transmettre mes informations{" "}
        </label>
      </div>

      <button onClick={handleSubmit}>Je crée mon compte</button>
    </form>
  );
}

FormAnimal.propTypes = {
  formName: PropTypes.string,
};
