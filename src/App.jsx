// import Button from "./components/Button/Button";
// import InputPassword from "./components/Input/InputTheme/InputPassword";
import Form from "./components/Form/FormCustom/FormCustom";

// import Input from "./components/Input/InputCustom/Input";

import "./App.css";

function App() {
  return (
    <>
      <Form>
        <div className="input-container">
          <h1 className="signup">Sign-Up</h1>
          <input type="text" placeholder="nom" />
          <input type="text" placeholder="prenom" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button className="btn-signup">signup</button>
      </Form> 
      {/* <Button className="button-glow ">button-glow </Button>
      <Button className=" cta-button "> cta-button </Button>
      <Button className="button-normal ">button-normal </Button>  */}

      {/* <Button className="button-martial ">button-martial</Button>

      {/* <InputPassword></InputPassword>

       <Input className="normal" placeholder="className = normal"></Input>

      <Input
        className="normal-round"
        placeholder="className = normal-round"
      ></Input>

     {/* <Input
        className="input-Text"
        placeholder="className = input-Text"
      ></Input> */}
    </>
  );
}

export default App;
