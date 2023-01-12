import { useSelector , useDispatch} from 'react-redux'
import { useEffect } from 'react'; 
import { deleteTask } from '../features/tasks/taskSlice';
import "./Tasklist.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faComment, faShare} from '@fortawesome/free-solid-svg-icons';

function TaskList ( ) {


    

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
            <div className='Seccion-user'>
            <div className='image-user'/>
             <p>Nombre usuario</p>
             <div className='BotonEdits' >
             <button className='btED' onClick={() => handleDelete(task.id)}>Edit</button>
             <button className='btED' onClick={() => handleDelete(task.id)}>Delete</button>
             </div>
            </div>
             <div className='Text-Area'>{task.title}</div>
            </div>
            <div className='seccion-like'>  
             <button className='boton'> <FontAwesomeIcon className='icono1' icon={faThumbsUp}/>     Like</button>
             <button className='boton'> <FontAwesomeIcon className='icono1' icon={faComment}/>   Comentar</button>
             <button className='boton'> <FontAwesomeIcon className='icono1' icon={faShare}/>  Compartir</button>
             </div>

            </div>
         ))}
        
         
        </div>
    )
}

export default TaskList;