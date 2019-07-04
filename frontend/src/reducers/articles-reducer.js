import { GET_ARTICLES, CLEAR_ARTICLES } from '../actions/articles-actions';

const initialState = {
    articles: [],
    totalPages: 0,
};
Object.freeze(initialState);

const articlesReducer = function(state = Object.assign({}, initialState), action) {
    switch(action.type) {
        case GET_ARTICLES:
            state.totalPages = action.data.totalPages;
            state.articles = state.articles.concat(action.data.articles);
            return Object.assign({}, state);
        case CLEAR_ARTICLES:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export default articlesReducer;
