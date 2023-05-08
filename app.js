alert ("Hola, Bienvenido a Tomo Cero");


const nombreUsuario = prompt ("Ingrese su nombre de usuario");
let ingresoUsuario = false;


switch(nombreUsuario){
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






