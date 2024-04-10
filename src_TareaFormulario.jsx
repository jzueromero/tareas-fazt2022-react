
import {useState} from 'react'

function ComponenteFormulario({crearTarea}) {

    const [titulo, setTitulo] = useState("");

    const envioFormulario = (e) => {
        e.preventDefault();
        
        crearTarea(titulo);
        setTitulo('');
        console.log(titulo)
    }

    return (
        <form onSubmit={envioFormulario}>
            <input placeholder='Escribre una tarea'
                onChange={function (e) {
                    setTitulo(e.target.value);
                }}
                value={titulo}
            />
            <button>Guardar Tarea</button>
        </form>
    )
}

export default ComponenteFormulario