import { Input } from "./components/Input/Input";
import { Form } from "./components/Form/Form";
function App() {
  return (
    <Form className="vectorForm">
      <h2> Signup </h2>
      <Input
        type="text"
        name="first name"
        placeholder="first name"
        label="First name"
        pattern="^[A-Za-z0-9]{3,16}$"
        required="true"
        errorMessage="last name must be 3-16 characters"
      />
      <Input
        type="text"
        name="last name"
        placeholder="last name"
        label="Last name"
        pattern="^[A-Za-z0-9]{3,16}$"
        required="true"
        errorMessage="last name must be 3-16 characters"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
        required="true"
        pattern="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}"
        errorMessage="Password must be 8-20 characters and include 1 number, 1 letter, and 1 special character."
      />

      <button> Sign up </button>
    </Form>
  );
}

export default App;
