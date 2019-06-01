import BlogApi from '../api/blog-api';

const initialState = {
	api: new BlogApi()
};

const apiReducer = function (state = initialState) {
	return state;
}

export default apiReducer;