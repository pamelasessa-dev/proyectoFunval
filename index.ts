import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
//Task es un  objeto que tiene las propiedades id, title,completed
interface Task{
  id:number;
  title:string;
  completed:boolean; //completed al ser booleano indica si la tarea esta terminada(true) o no(false)
}

const tareas: Task[] = [];
//tengo un arreglo que solamente puede contener objetos que respeten la estructura Task(is,title,completed)

let nextId:number = 1;
// comienzo en 1

/*-----arrow functions----*/

//agregar tarea

const addTask = (title:string):void =>{
  //task con las propiedades definidas en la interface 
  const nuevaTarea: Task ={
    id:nextId,
    title:title,
    completed:false,
  };
  tareas.push(nuevaTarea); //se agrega la tarea
  nextId++; //aumenta el contador de id para que tenga otra id diferente
}
//listar tareas

const listTasks = (): void =>{
  console.log("---Lista de Tareas---");
  for (let index = 0; index < tareas.length; index++) {
    console.log(`[${tareas[index].id}] ${tareas[index].title} - ${tareas[index].completed ? "completada" : "pendiente"}`

    );
      
    }
    
  };

//eliminar tarea

  const removeTask = (): void => {
  const tareaEliminada = tareas.pop();
  if(tareaEliminada){
    console.log("Tarea eliminada " + tareaEliminada.title);
  }else{ 
    console.log("no hay tareas");

  }
};


/*---Funcion pricipal----*/

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
        const title = await rl.question("Ingresa una tarea: ");
        addTask(title);
        console.log("Tarea agregada con éxito.");
        break;
      
        case "2":
          removeTask();
          break;

        case "3":
          listTasks();
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