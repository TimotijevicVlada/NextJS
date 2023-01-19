import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

//reducers
import { budgetReducer } from "./reducers/budgetReducer";
import { todosReducer } from './reducers/todosReducer';
import { caractersReducer } from './reducers/caractersReducer';


export const reducers = combineReducers({
  budgetReducer: budgetReducer,
  todosReducer: todosReducer,
  caractersReducer: caractersReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

export type State = ReturnType<typeof reducers>;