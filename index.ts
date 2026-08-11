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

const bienvenida : string = "¡Bienvenid@, ";

const mensaje : string = bienvenida + userName + "!";
console.log("==================================");
console.log("  " + systemName + " v" + version);
console.log("  " + mensaje);
console.log("  Próxima versión: " + (version + 1)); // op. aritmética
console.log("==================================");
*/



const tareas: string[] = [];

async function prueba() {
  console.log("==================================");
  console.log("  proyecto v0");
  console.log("  ¡Bienvenid@, Pamela!");
  console.log("  Próxima versión: 1");
  console.log("==================================");
  
  let opcionElegida: string;
  
  do {
    console.log("\n--- MENÚ ---");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar última tarea");
    console.log("3. Listar tareas");
    console.log("4. Salir");
    
    opcionElegida = await rl.question("Elige una opción: ");
    
    switch (opcionElegida) {
      
      case "1":
        const nuevaTarea = await rl.question("Ingresa una tarea: ");
        tareas.push(nuevaTarea);
        console.log("Tarea agregada con éxito.");
        break;
      
        case "2":
          const tareaEliminada = tareas.pop();
          if(tareaEliminada){
            console.log("Tarea eliminada" + tareaEliminada);
          }else{
            console.log("no hay tarea para eliminar");
          }
          break;

        case "3":
          console.log("Lista de Tareas");
          for(let index =0;index < tareas.length;index++){
            console.log(index+1) + tareas[index];
          }
          
          break;

        case "4":
          console.log("¡Hasta luego!");
          break;
          
          default:
            console.log("Opción no válida.");
          }

    } while (opcionElegida !== "4");

    rl.close();
}

prueba();