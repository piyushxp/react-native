import {createStore, combineReducers, applyMiddleware} from 'redux';
import countReducer from './redux/reducers/countReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({data: countReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
