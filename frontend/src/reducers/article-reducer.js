import { GET_ARTICLE } from '../actions/articles-actions';

const initialState = {
    article: {},
};

const articleReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_ARTICLE:
            return Object.assign({}, state, {article: action.article});
        default:
            return state
    }
}

export default articleReducer;
