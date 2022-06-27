import { legacy_createStore, combineReducers} from "redux";
import { reducer as TodoReducer } from "./reducer"; 
import { reducer as Authreducer } from "./Auth/reducer";

const RootReducer = combineReducers({TodoReducer,Authreducer});

const store = legacy_createStore(RootReducer,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};