import { useSelector , useDispatch} from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice';
import "./Tasklist.css";

function TaskList ( ) {

    const tasks = useSelector (state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }


    return (

        <div className='Casilla-publicacion'>
       
         {tasks.map(task => (
            
            <div key={task.id}>
             <div className='image-user'/>
             <p>Nombre usuario</p> 
             <p className='Text-Area'>{task.title}</p>
             <button className='Opc-edicion' onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
         ))}
         <div className='seccion-like'></div>
        </div>
    )
}

export default TaskList;