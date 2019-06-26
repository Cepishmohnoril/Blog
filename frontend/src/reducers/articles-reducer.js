import { GET_ARTICLES } from '../actions/articles-actions';

const initialState = {
    articles: [],
    totalPages: 0,
};

const articlesReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_ARTICLES:
            state.totalPages = action.data.totalPages;
            state.articles = state.articles.concat(action.data.articles);
            return Object.assign({}, state);
        default:
            return state
    }
}

export default articlesReducer;
