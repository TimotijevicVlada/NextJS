import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

//reducers
import { budgetReducer } from "./reducers/budgetReducer";
import { todosReducer } from './reducers/todosReducer';
import { caractersReducer } from './reducers/caractersReducer';
import { quizReducer } from './reducers/quizReducer';


export const reducers = combineReducers({
  budgetReducer: budgetReducer,
  todosReducer: todosReducer,
  caractersReducer: caractersReducer,
  quizReducer: quizReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));

export type State = ReturnType<typeof reducers>;