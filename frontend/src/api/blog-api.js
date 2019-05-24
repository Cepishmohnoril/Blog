import axios from 'axios';
import store from '../store';
import * as articlesActions from '../actions/articles-actions'


class BlogApi {

    getArticles() {
        return axios.get(process.env.REACT_APP_API+'/articles')
            .then(response => {
                store.dispatch(articlesActions.getArticles(response.data));
                return response;
        });
    }
}

export default BlogApi;