import { combineReducers } from 'redux';
import articlesReducer from './articles-reducer'

//Reducers


var reducers = combineReducers({
	articlesState: articlesReducer
});

export default reducers;
