import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

//reducers
import { budgetReducer } from "./reducers/budgetReducer";


export const reducers = combineReducers({
    budgetReducer: budgetReducer,
  });

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));