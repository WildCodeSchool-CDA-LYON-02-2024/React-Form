import { Input } from "./components/Input/Input";
import { Form } from "./components/Form/Form";
function App() {
  return (
    <Form className="basic-form">
      <h2> Login </h2>
      <Input
        type="text"
        name="username"
        placeholder="username"
        label="username"
        pattern="^[A-Za-z0-9]{3,16}$"
        errorMessage="user name muste be 3-16 characters"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
        pattern="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}"
        errorMessage="Password must be 8-20 characters and include 1 number, 1 letter, and 1 special character."
      />
    </Form>
  );
}

export default App;
