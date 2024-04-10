function TareaCard({tarea, borrarTarea}) {
  function mostrarAlerta(){
    alert(tarea.id);
  }


  return (
    <div key={tarea.id}>
                        <h1>{tarea.title}</h1>
                        <p>{tarea.description}</p>
                        <button 
                        onClick={() => borrarTarea(tarea.id)} >
                          Elminar Tarea
                        </button>
                    </div>
  )
}

export default TareaCard