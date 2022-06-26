import * as types from "./actionTypes";

const getTodoListRequest = () => {
    return {type : types.GET_TODO_LIST_REQUEST};
}

const getTodoListSuccess = () => {
    return {type : types.GET_TODO_LIST_SUCCESS};
}

const getTodoListFailure = () => {
    return {type : types.GET_TODO_LIST_FAILURE};
}


const addTodoRequest = () => {
    return {type : types.ADD_TODO_REQUEST};
}

const addTodoSuccess = () => {
    return {type : types.ADD_TODO_SUCCESS};
}

const addTodoFailure = () => {
    return {type : types.ADD_TODO_FAILURE};
}

export {getTodoListRequest,
    getTodoListSuccess,
    getTodoListFailure,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure
};