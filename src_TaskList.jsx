import CartaTarea from './TareaCard'

function ComponenteTareas({ListaTareas, borrarTarea}) {

    if(ListaTareas.length === 0)
    {
        return <h1>No hay tareas aun</h1>
    }
    else
    {
        return (
            <div >
                {ListaTareas.map((tarea) => (
                    <CartaTarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea}/>
                ))}
            </div>)
    }
}

export default ComponenteTareas