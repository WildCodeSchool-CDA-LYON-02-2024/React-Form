import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <form>
        <h1 className="signup">SIGN-UP </h1>

        <div className="input-container">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prenom" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn-signup" type="submit ">
          {" "}
          Sign-Up
        </button>
      </form>
    </div>
  );
}

export default Form;
