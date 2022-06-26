import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../redux/action';
import axios from 'axios';

const Addtodo = () => {

    const dispatch = useDispatch();

    const [todo, settodo] = useState("");

    const Addtodo = (payload) => {
        dispatch(addTodoRequest());
        axios.post("/todos",payload)
        .then(r => dispatch(addTodoSuccess(r.data)))
        .catch(e => dispatch(addTodoFailure(e)));
    };

    const handleadd = () => {
        if(todo)
        {
            const payload = {title : todo , status : false}
            Addtodo(payload)
            settodo("")
        }
    }

  return (
    <div>
        <h3>Addtodo</h3>
        <input type="text" value={todo} onChange={(e) => settodo(e.target.value)} placeholder='add something'/>
        <button onClick={handleadd}>Add</button>
    </div>
  )
}

export default Addtodo;