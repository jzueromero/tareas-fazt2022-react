import TodasTareasComp from './components/TaskList'; 
import FormularioComp from './components/TareaFormulario'
import { ListaTareas as data } from './components/data/tareas';
import {useState, useEffect} from 'react'

function App() {

  const [ListaTareas, setTareas] = useState([]);

    useEffect(() => { 
        setTareas(data);
    }, []);

    function crearTarea(tituloTarea){
      setTareas([...ListaTareas, {
        title: tituloTarea,
        id: ListaTareas.length,
        description: 'descripcion de: '+tituloTarea
      }]);
    }

    function borrarTarea(idTarea){
      setTareas(ListaTareas.filter(tarea => tarea.id !== idTarea));
    }

  return (
    <>
      <FormularioComp crearTarea={crearTarea}/>
      <TodasTareasComp ListaTareas={ListaTareas} borrarTarea={borrarTarea}  />
    </>
  )
} 

export default App