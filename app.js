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

const tomos = [
  {id: 1, nombre:"Berserk #1", precio: 2000},
  {id: 2, nombre:"Berserk #2", precio: 2500},
  {id: 3, nombre:"Berserk #3", precio: 3200},
  {id: 4, nombre:"Berserk #4", precio: 2000},
  {id: 5, nombre:"Berserk #5", precio: 2500},
  {id: 6, nombre:"Berserk #6", precio: 1500}
];

function Tomo(nombre, precio, img) {
  this.id = tomos.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  if (!img) {
    this.img = "https://via.placeholder.com/300";
  } else {
    this.img = img;
  }
}

function crearTomo() {
  let nombre = prompt("Ingresa el nombre del tomo");
  let precio = prompt("Ingresa el precio del tomo");
  let img = prompt("Ingresa la url del tomo");

  const nuevoTomo = new Tomo(nombre, precio, img);

  return nuevoTomo;
}


let param = prompt("Ingresa criterio a filtrar");
let ingreso = prompt("Ingresa filtro");

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


console.log(filtrar(servicios, ingreso, param));







