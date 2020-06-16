import { combineReducers } from 'redux';
import articlesReducer from './articles-reducer'
import articleReducer from './article-reducer'
import apiReducer from './api-reducer';

//Reducers


var reducers = combineReducers({
	apiState: apiReducer,
	articlesState: articlesReducer,
	articleState: articleReducer
});

export default reducers;
