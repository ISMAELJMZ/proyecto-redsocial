import { useSelector , useDispatch} from 'react-redux'
import { useEffect } from 'react'; 
import { deleteTask } from '../features/tasks/taskSlice';
import "./Tasklist.css";

function VentanaFotos ( ) {

    const tasks = useSelector (state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }


    useEffect( ()=> {

    }, [])
    

    return (

        <div>
        
          {tasks.map(task => (
            <div className='Casilla-publicacion'>
            <div key={task.id}>
             <div className='image-user'/>
             <p>Nombre usuario</p> 
             <button className='Opc-edicion' onClick={() => handleDelete(task.id)}>Edit</button>
             <button className='Opc-edicion' onClick={() => handleDelete(task.id)}>Delete</button>
             <div className='Text-Area'>{task.title}</div>
             
            </div>
            <div className='seccion-like'>
             <button>Like</button>
             <button>Comentar</button>
             <button>Compartir</button>
             </div>

            </div>
         ))}
        
         
        </div>
    )
}

export default VentanaFotos;