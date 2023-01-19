import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

//reducers
import { budgetReducer } from "./reducers/budgetReducer";
import { todosReducer } from './reducers/todosReducer';


export const reducers = combineReducers({
  budgetReducer: budgetReducer,
  todosReducer: todosReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

export type State = ReturnType<typeof reducers>;