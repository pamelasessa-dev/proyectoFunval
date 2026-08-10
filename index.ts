import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
const systemName : string = "proyecto";
const version: number = 0;
const userName: string = "Pamela";
/*
==================================
  Nombre del sistema  vX.X
  ¡Bienvenido, [nombre]!
==================================
*/
const bienvenida : string = "¡Bienvenid@, ";

const mensaje : string = bienvenida + userName + "!";
console.log("==================================");
console.log("  " + systemName + " v" + version);
console.log("  " + mensaje);
console.log("  Próxima versión: " + (version + 1)); // op. aritmética
console.log("==================================");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

