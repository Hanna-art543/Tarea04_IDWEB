import { usuarios } from "./datos";
import { filtrarMayores } from "./filtros";

const mayores = filtrarMayores(usuarios);

console.log("Usuarios mayores de edad:");
console.log(mayores);