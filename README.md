
# FORMI-DABLE !

---

**Ce projet est une bibliothèque de formulaires réutilisables pour les applications web.**

## Installation

**Pour commencer à utiliser la bibliothèque, suivez ces étapes :**

      npm i @shark-man/react-form

---

## Exemple d'utilisation simple de notre application

```jsx


import { Form, Input } from "@shark-man/react-form";

function App() {
  return (
    <>
      <Form className="basic-form">
        <h2>Information</h2>
        <Input type="text" placeholder="firstname" />
        <Input type="text" placeholder="lastname" />
        <Input type="number" placeholder="age" />
        <label>i have a handicap</label>
        <label htmlFor="">
          <input type="radio" /> Yes
        </label>
        <label htmlFor="">
          <Input type="radio" /> No
        </label>

        <select>
          {" "}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <button> Submit </button>
      </Form>
    </>
  );
}

export default App;
```

### Voici le rendu!

---

![exemple d'utilisation](https://media.discordapp.net/attachments/1227592850624090143/1233153862056022138/Capture_decran_2024-04-25_220854.png?ex=662c0f87&is=662abe07&hm=f1fd3b37961370b447ec002e50ca2e8740cd5517a68c87f24e9662a1d83adc59&=&format=webp&quality=lossless&width=533&height=708)

### Exemple Login Form

```jsx
import { Form, Input, InputPassword } from "@shark-man/react-form";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    email: " ",
    password: " ",
  });
  const handleSubmit = () => {
    console.log(data);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()} className="vectorForm">
        <h2>Login</h2>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="Email"
        />
        <InputPassword
          name="password"
          onChange={handleChange}
          value={data.password}
          placeholder="Password"
        />
        <button type="button" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </Form>
    </>
  );
}

export default App;
```

### Voici le rendu!

![Login form avec onSubmit](https://media.discordapp.net/attachments/1227592850624090143/1233153861804359870/Capture_decran_2024-04-25_214757.png?ex=662cb847&is=662b66c7&hm=0601220bb97af40a39aab9792394d8d40c3241e4f25e972834b61da3b4e2dfed&=&format=webp&quality=lossless&width=721&height=710)

```jsx
import { Form, Input, InputPassword } from "@shark-man/react-form";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(data);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()} className="basic-form">
        <h2>Signup</h2>
        <Input
          type="text"
          name="firstname"
          onChange={handleChange}
          value={data.firstname}
          placeholder="First name"
        />
        <Input
          type="text"
          name="lastname"
          onChange={handleChange}
          value={data.lastname}
          placeholder="Last name"
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="Email"
        />
        <InputPassword
          name="password"
          onChange={handleChange}
          value={data.password}
          placeholder="Password"
        />
        <button type="button" onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </Form>
    </>
  );
}

export default App;
```

![Signup form avec onSubmit](https://cdn.discordapp.com/attachments/1227592850624090143/1233153861561352275/Capture_decran_2024-04-25_214153.png?ex=662cb847&is=662b66c7&hm=0bea69ddd7d9742160ecefe3f92d8c1867f18ceaef8aadde38a9574b6d71814b&)

