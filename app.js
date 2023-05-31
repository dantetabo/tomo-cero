alert ("Hola, Bienvenido a Tomo Cero");


const nombreUsuario = prompt ("Ingrese su nombre de usuario");
let ingresoUsuario = false;


/* switch(nombreUsuario){
    case "Dante":
      alert("Hola Dante")
      ingresoUsuario = true;
      break;
    case "dante":
      alert("Hola Dante")
      ingresoUsuario = true;
      break;
    default:
      alert("Usted no esta registrado en Tomo Cero!")
      break;
};



if (ingresoUsuario) {
  let claveUsuario = "123";
  for (let i = 2; i >= 0; i--) {
    let ingresoclave = prompt(
      "Ingresa tu clave. Tenes " + (i + 1) + " oportunidades"
    );
    if (ingresoclave === claveUsuario) {
      alert("Bienvenido " + nombreUsuario +". Ya podes comprar");
      break;
    } else {
      alert("Error");
    }
  };
};
*/

const manga = {
  berserk: [
    {id: 1, nombre:"Berserk #1", precio: 2000},
    {id: 2, nombre:"Berserk #2", precio: 2500},
    {id: 3, nombre:"Berserk #3", precio: 3200},
    {id: 4, nombre:"Berserk #4", precio: 2000},
    {id: 5, nombre:"Berserk #5", precio: 2500},
    {id: 6, nombre:"Berserk #6", precio: 1500}
  ],
  vinland: [
    {id: 1, nombre:"Vinland #1", precio: 2000},
    {id: 2, nombre:"Vinland #2", precio: 2500},
    {id: 3, nombre:"Vinland #3", precio: 3200},
    {id: 4, nombre:"Vinland #4", precio: 2000},
    {id: 5, nombre:"Vinland #5", precio: 2500},
    {id: 6, nombre:"Vinland #6", precio: 1500}
  ],
  vagabond: [
    {id: 1, nombre:"Vagabond #1", precio: 2000},
    {id: 2, nombre:"Vagabond #2", precio: 2500},
    {id: 3, nombre:"Vagabond #3", precio: 3200},
    {id: 4, nombre:"Vagabond #4", precio: 2000},
    {id: 5, nombre:"Vagabond #5", precio: 2500},
    {id: 6, nombre:"Vagabond #6", precio: 1500}
  ]
};


let mangaElegido = prompt("¿En qué manga deseas buscar? (berserk, vinland, vagabond)");
let criterioBusqueda = prompt("¿queres buscar por id, precio o tomo?");
let filtrador;

switch(criterioBusqueda){
  case "id":
    filtrador = prompt("Ingresa el id");
    break;
  case "precio":
    filtrador = prompt("Ingresa el precio que te conviene");
    break;
  case "tomo":
    ingresoUsuario = prompt("Ingresa el tomo buscado");
    break;
  default:
    break;
};

/* let filtrador = prompt("Ingresa filtro");
 */


function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    if (param === "id") {
      return el.id == filtro;
    } else if (param === "precio") {
      return el.precio <= filtro;
    } else {
      return el[param].includes(filtro);
    }
  });
}


console.log(filtrar(manga[mangaElegido], filtrador, criterioBusqueda));
