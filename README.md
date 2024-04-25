# Bienvenue dans la documentation du projet FORMI-DABLE ! 

---
__Ce projet est une bibliothèque de formulaires réutilisables pour les applications web. :) __






## Installation
__ Pour commencer à utiliser la bibliothèque, suivez ces étapes : __
      
      npm i @shark-man/react-form

***

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


```

### Voici le rendu!
---
   ![exemple d'utilisation](https://media.discordapp.net/attachments/1227592850624090143/1233153862056022138/Capture_decran_2024-04-25_220854.png?ex=662c0f87&is=662abe07&hm=f1fd3b37961370b447ec002e50ca2e8740cd5517a68c87f24e9662a1d83adc59&=&format=webp&quality=lossless&width=533&height=708)



Exemple d'un input 

![code pour un input](https://cdn.discordapp.com/attachments/1227592850624090143/1230875331783692359/Capture_decran_2024-04-19_153654.png?ex=6634e8fb&is=662273fb&hm=83a38af114647d98a1608253bd13bfa50b986d2e5f8f1f1dd8aa6f6046a3a7a9&)

![dans le return](https://media.discordapp.net/attachments/1227592850624090143/1230875331553132606/Capture_decran_2024-04-19_153230.png?ex=6634e8fb&is=662273fb&hm=1e0d2862839f97d4c2f951fbb734bd44a195fd54457913a310e77fbc7dfe6a65&=&format=webp&quality=lossless&width=1434&height=66)

Voici le rendu

![input](https://cdn.discordapp.com/attachments/1227592850624090143/1230875737695846410/Capture_decran_2024-04-19_153956.png?ex=6634e95c&is=6622745c&hm=967a58b16562e0d351b66c78b5eb2cf86b80b067decde47496c1ce0a8d7919f1&)



   Exemple d'un button

![code pour un button](https://media.discordapp.net/attachments/1227592850624090143/1230875330932379649/Capture_decran_2024-04-19_153014.png?ex=6634e8fb&is=662273fb&hm=64bfcc543fbc71ba1323ac66cf07effa0120aebc0f1d18c8c789d867a11c4dfd&=&format=webp&quality=lossless&width=1010&height=43)

![dans le return](https://media.discordapp.net/attachments/1227592850624090143/1230875330642968586/Capture_decran_2024-04-19_152957.png?ex=6634e8fb&is=662273fb&hm=373f6edd1cf9d8d49d1bc44d59d97db5a3fcdac0a636583c9141591818eadbd9&=&format=webp&quality=lossless&width=1220&height=87)


Voici le rendu
![button](https://media.discordapp.net/attachments/1227592850624090143/1230875330202439711/Capture_decran_2024-04-19_152914.png?ex=6634e8fb&is=662273fb&hm=6fe814cef355e48a229c7ed0ca79a9fac9b8e35159b226a14e13c54ab814865d&=&format=webp&quality=lossless&width=458&height=123)



   
    
