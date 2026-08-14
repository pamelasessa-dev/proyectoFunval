import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

//----Interface----//

interface Task{
  id:number;
  title:string;
  completed:boolean; 
}

//---Variables----//

const tareas: Task[] = [];

let nextId:number = 1;



/*-----arrow functions----*/
//---guardar tarea en "DB"---//
function saveToDB(tarea:Task): Promise<void> {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(`Tarea ${tarea.title} guardada `);
      resolve();      
    },2000);
  });
};

//---agregar tarea---//

const addTask = async (title:string):Promise<boolean> =>{
  try{
    if(title === ""){
      throw new Error("Debes ingresar una tarea para poder continuar.");
    }
  const nuevaTarea: Task ={
    id:nextId,
    title:title,
    completed:false,
  };
  await saveToDB(nuevaTarea);
  tareas.push(nuevaTarea); 
  nextId++;
  return true;
}catch(error){
  console.log(error);
  return false;
} 
};

//--eliminar tarea--//

  const removeTask = (): void => {
  const tareaEliminada = tareas.pop();
  if(tareaEliminada){
    console.log("Tarea eliminada " + tareaEliminada.title);
  }else{ 
    console.log("no hay tareas");

  }
};

/* ---listar tareas - Desestructuración---

en vez del for usamos -  
.map() para transformar
*/

const listTasks = (): void =>{
  console.log("---Lista de Tareas---");
  const tareasTransformadas= tareas.map(task =>{
    const{ id, title, completed} = task;
    return `${id} - ${title} - ${completed ? "completada" : "pendiente"}`;

  });
//.forEach() para recorrer el arreglo de strings resultante 
// e imprimirlos en consola  
  tareasTransformadas.forEach(tarea => {
    console.log(tarea);
  });
    
};

// -- opción para markCompleted
// Buscar la tarea por su id con find--

const markCompleted = (id: number) => {
    const task = tareas.find(tarea => tarea.id === id);

    if (task) {
        task.completed = true; 
    }
};

//--funcion para ver solo las tareas pendientes--// 

const filterPending = (): Task[] => {
    return tareas.filter(tarea => tarea.completed === false);
};

//--funcion  para ver solo las tareas completadas ---//

const filterCompleted = (): Task[] => {
    return tareas.filter(tarea => tarea.completed === true);
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
    console.log("4. Marcar como completada");
    console.log("5. Tareas pendientes");
    console.log("6. Tareas completadas");
    console.log("7. Salir");
    
    opcionElegida = await rl.question("Elige una opción: ");
    
    switch (opcionElegida) {
      
      case "1":
        const title = await rl.question("Ingresa una tarea: ");
        const guardada = await addTask(title);
        if(guardada) {
          console.log("Tienes una nueva tarea por hacer");
        }
        
        break;
      
        case "2":
          removeTask();
          break;

        case "3":
          listTasks();
          break;

        case "4":
          const id = await rl.question("Ingresa el número de la tarea: ");
          markCompleted(Number(id));
          break;
         case "5":
          const pendientes = filterPending();
          console.log("Tareas pendientes");
          pendientes.forEach(tarea => {
            console.log(`[${tarea.id}] ${tarea.title} - pendiente`);
          });
          break;
         case "6":
          const completadas = filterCompleted();
          console.log("Tareas completadas");
          completadas.forEach(tarea => {
            console.log(`[${tarea.id}] ${tarea.title} - completada`);});
            break;
          case "7":
            console.log("Hasta luego");
            break;
          
          default:
            console.log("Opción no válida.");
          }

    } while (opcionElegida !== "7");

    rl.close();
}

prueba();