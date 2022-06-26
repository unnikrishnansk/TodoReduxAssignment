import React , {useEffect} from 'react'
import { getTodoListFailure, getTodoListRequest, getTodoListSuccess } from '../redux/action';
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import Addtodo from './Addtodo';
import Todolist from './Todolist';

const Todos = () => {

const dispatch = useDispatch();
const todos = useSelector(state => state.todos);

    const getTodos = () => {
        dispatch(getTodoListRequest());
        fetch("http://localhost:8080/todos")
        .then((r) => r.json())
        .then((data) => dispatch(getTodoListSuccess(data)))
        .catch((e) => dispatch(getTodoListFailure(e)));

    };

    useEffect(() => {
        getTodos();
        // console.log(todos);
    }, []);
    console.log(todos);
    

  return (
    <div>
        <h3>Todos</h3>

        <Addtodo />
        <Todolist todolist={todos}/>

    </div>
  )
}

export default Todos;