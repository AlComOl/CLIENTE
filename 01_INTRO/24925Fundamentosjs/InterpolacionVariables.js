//en ES& se añade una nueva forma de concadenar variables 

const str= "Hola,";
const str1= " que tal?";
const str2=" Me llamo ALvaro";

console.log(`${str} ${str1} ${str2}`);

// Todo esto lo hace ideal para crear plantillas reutilizables, por ejemplo, con código HTML:

const magicalWord = `<strong>Magical Word</strong>`;
const template = `
  <div class="container">
    ${magicalWord}
  </div>
`;
