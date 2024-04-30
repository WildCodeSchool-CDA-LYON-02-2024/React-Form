


![](https://cdn.discordapp.com/attachments/702664242943492207/1232960794111639602/40a79c93-3214-4bc7-872a-03789829ac2e_1.webp?ex=662b5bb8&is=662a0a38&hm=6990be9121e727da157213c167864ee1bcfe037b80f3d5860288a3de8d243d2b&)

---

**Ce projet est une bibliothèque de formulaires réutilisables pour les applications web.**

---

- Variété de boutons, d'entrées et de formulaires préconçus.
- Personnalisable en termes de style, de couleur et de comportement.
- Thèmes prédéfinis disponibles pour une harmonisation rapide.
- Solution complète et flexible pour les nouveaux projets ou les mises à jour d'applications existantes.
- Facilite l'intégration et améliore l'expérience utilisateur.
  

## Installation

**Pour commencer à utiliser la bibliothèque, suivez ces étapes :**

      npm i @shark-man/react-form

---



### les listes des classes et des props 

---


| Nom de la Classe | Description                                 |
|------------------|---------------------------------------------|
| basic-form       | Classe  pour un formulaire standard  |
| vectorForm       | Classe pour un formulaire avec un thème vectoriel |
| animal-form       | Classe pour un formulaire avec un thème animalier |

### Props pour les champs Input :

| Props       | Description                            | Exemple                                                    |
|-------------|----------------------------------------|------------------------------------------------------------|
| type        | Type de champ (par exemple, "text", "password", etc.) | `type="password"`                                          |
| name        | Nom du champ dans le formulaire       | `name="password"`                                          |
| placeholder | Texte à afficher en tant que placeholder dans le champ | `placeholder="Password"`                                |
| label       | Étiquette du champ                     | `label="Password"`                                         |
| pattern     | Modèle de validation du champ(vous pouvez aussi ajouter les votres)         | `pattern="(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}"` |
| errorMessage| Message d'erreur affiché en cas de validation échouée | `errorMessage="Password must be 8-20 characters and include 1 number, 1 letter, and 1 special character."` |






## Ce code présente un formulaire de collecte d'informations dans une application React en utilisant des composants de la bibliothèque "@shark-man/react-form".






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





## Ce code crée un formulaire de connexion dans une application React en utilisant des composants de la bibliothèque "@shark-man/react-form". 

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






### Ce code montre comment créer un formulaire d'inscription dans une application React en utilisant des composants de la bibliothèque _"@shark-man/react-form"_. 

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




### Voici le rendu!

![Signup form avec onSubmit](https://cdn.discordapp.com/attachments/1227592850624090143/1233153861561352275/Capture_decran_2024-04-25_214153.png?ex=662cb847&is=662b66c7&hm=0bea69ddd7d9742160ecefe3f92d8c1867f18ceaef8aadde38a9574b6d71814b&)




### Ce code représente un formulaire de connexion React qui utilise les composants Input et Form du package "@shark-man/react-form", avec validation des données pour les champs de nom d'utilisateur et de mot de passe.


```jsx
import { Input,Form } from "@shark-man/react-form";

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
```



### Voici le rendu!

![Login avec un erreur ](https://cdn.discordapp.com/attachments/1227592850624090143/1234486284811112548/Capture_decran_2024-04-29_144648.png?ex=6630e871&is=662f96f1&hm=e7b36dd37d47fb4a7b64f0c21c4c7f2d54eefa196adf667dcb79d5ad69db7d40&)
![Login  sans erreur ](https://media.discordapp.net/attachments/1227592850624090143/1234486285096452138/Capture_decran_2024-04-29_144715.png?ex=6630e872&is=662f96f2&hm=8e91cdaace25c3bd4cdef565ac1f1115e34abf6a541b4a76fffd1c83d8363774&=&format=webp&quality=lossless&width=866&height=661)



## Ce code importe et utilise un composant Button de la bibliothèque _"@shark-man/react-form"_.   Il démontre comment créer plusieurs boutons avec différents styles en utilisant des classes CSS spécifiques.
```jsx
import { Input,Form } from "@shark-man/react-form";

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
```



### Voici le rendu!

![Login avec un erreur ](https://cdn.discordapp.com/attachments/1227592850624090143/1234486284811112548/Capture_decran_2024-04-29_144648.png?ex=6630e871&is=662f96f1&hm=e7b36dd37d47fb4a7b64f0c21c4c7f2d54eefa196adf667dcb79d5ad69db7d40&)
![Login  sans erreur ](https://media.discordapp.net/attachments/1227592850624090143/1234486285096452138/Capture_decran_2024-04-29_144715.png?ex=6630e872&is=662f96f2&hm=8e91cdaace25c3bd4cdef565ac1f1115e34abf6a541b4a76fffd1c83d8363774&=&format=webp&quality=lossless&width=866&height=661)



## Ce code importe et utilise un composant Button de la bibliothèque _"@shark-man/react-form"_.   Il démontre comment créer plusieurs boutons avec différents styles en utilisant des classes CSS spécifiques.
```jsx
import { Button } from "@shark-man/react-form";

function App() {
  return (
    <div>
      <Button className="button-glow">Button-glow </Button>
      <br />
      <Button className="cta-button"> Cta-button</Button>
      <br />
      <Button className="button-normal"> Button-normal</Button>
      <br />
      <Button className="button-martial"> Button-martial</Button>
    </div>
  );
}

export default App;
```


### Voici le rendu!

![Exemple de Buttons ](https://cdn.discordapp.com/attachments/1227592850624090143/1233393196302860368/Capture_decran_2024-04-26_142324.png?ex=662cee6d&is=662b9ced&hm=5217d18e6607a93dda96eeafc45dc62b2495b3a1b3e20b43fdbee3cfee1937fb&)
