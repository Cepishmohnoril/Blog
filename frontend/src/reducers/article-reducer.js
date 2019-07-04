import { GET_ARTICLE } from '../actions/articles-actions';

const initialState = {
    article: {},
};
Object.freeze(initialState);

const articleReducer = function(state = Object.assign({}, initialState), action) {
    switch(action.type) {
        case GET_ARTICLE:
            return Object.assign({}, state, {article: action.data});
        default:
            return state;
    }
}

export default articleReducer;
