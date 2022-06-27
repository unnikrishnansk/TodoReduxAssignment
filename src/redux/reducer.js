import * as types from "./actionTypes";
import { loadData, saveData } from "../utilis/localStorage";


const initialState = {
    todos : loadData('todos') || [],
    isLoading : false,
    isError : false,
}

const reducer = (state=initialState , action) => {
    const {type , payload} = action;
    switch ( type){

        case types.GET_TODO_LIST_REQUEST:
            return  {
                ...state,
                isLoading : true,
                isError : false,
            };

            case types.GET_TODO_LIST_SUCCESS:
                let newTodo = [state.todos,payload];
                saveData("todos",newTodo)
            return  {
                ...state,
                todos : newTodo,
                isLoading : false,
                isError : false,
            };

            case types.GET_TODO_LIST_FAILURE:
            return  {
                ...state,
                isLoading : false,
                isError : true,
            };

            case types.ADD_TODO_REQUEST:
                return  {
                    ...state,
                    isLoading : true,
                    isError : false,
                };
    
                case types.ADD_TODO_SUCCESS:
                    let newTodos = [...state.todos,payload]
                return  {
                    ...state,
                    todos : newTodos,
                    isLoading : false,
                    isError : false,
                };
    
                case types.ADD_TODO_FAILURE:
                return  {
                    ...state,
                    isLoading : false,
                    isError : true,
                };
        default : 
        return state;
    }
};

export {reducer};