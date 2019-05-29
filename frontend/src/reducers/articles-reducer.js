import { GET_ARTICLES } from '../actions/articles-actions';

const initialState = {
	articles: []
};

const articlesReducer = function(state = initialState, action) {
	switch(action.type) {
		case GET_ARTICLES:
			return Object.assign({}, state, {articles: action.articles});
		default:
			return state
	}
}

export default articlesReducer;
