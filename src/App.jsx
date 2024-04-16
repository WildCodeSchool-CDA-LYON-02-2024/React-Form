import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <h1>test</h1>
      <Button className="button-glow" onClick={handleClick}>
        button-glow
      </Button>
      <Button className="cta-button" onClick={handleClick}>
        cta-button
      </Button>
      <Button className="button-23">button-23</Button>
      <Button className="button-61">button-61</Button>
      <Input className="input-Text" placeholder="Name">
        <label htmlFor="Name"> Name</label>
      </Input>
      <Input className="input-Text" placeholder="Name"></Input>
    </>
  );
}

export default App;
