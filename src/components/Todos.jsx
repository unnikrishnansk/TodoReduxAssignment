import React , {useEffect} from 'react'
import { getTodoListFailure, getTodoListRequest, getTodoListSuccess } from '../redux/action';
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import Addtodo from './Addtodo';
import Todolist from './Todolist';

const Todos = () => {

const dispatch = useDispatch();
const todos = useSelector((store) => store.reducer.todos);

    const getTodos = () => {
        dispatch(getTodoListRequest());
        axios
        .get("/todos")
        .then((r) =>  dispatch(getTodoListSuccess(r.data)))
        // console.log(r.data);
        .catch((e) => dispatch(getTodoListFailure(e)));

    };

    useEffect(() => {
      getTodos();
   
    }, []);
    console.log(todos);

    // useEffect(() => {
    //   dispatch(getTodoListRequest());
    //   fetch(`http://localhost:8080/todos`)
    // .then((res) => {
    //   dispatch(getTodoListSuccess))
    //   console.log(data);
    // }
    //   // settodos(data);
    // );
    
    //   }, []);
    
      
  return (
    <div>
        <h3>Todos</h3>

        <Addtodo />
        <Todolist todolist={todos}/>

    </div>
  )
}

export default Todos;