import axios from 'axios';
import store from '../store';
import * as articlesActions from '../actions/articles-actions'

export const HTTP_SUCCESS = 200;
export const HTTP_NOT_FOUND = 404;
export const HTTP_SERVER_ERROR = 500;

class BlogApi {

    construct() {
        // eslint-disable-next-line
        let lastRequestError = false;

        let api = axios.create({
            
        });
    }

    getArticles() {
        this.lastRequestError = false;
        return axios.get(process.env.REACT_APP_API+'/articles')
            .catch(error => {
                this.lastRequestError = error.response.status;
                return false;
            })
            .then(response => {
                store.dispatch(articlesActions.getArticles(response.data));
                return response;
            });
    }

    getArticle(id) {
        this.lastRequestError = false;
        return axios.get(process.env.REACT_APP_API+'/article/'+id)
            .catch(error => {
                this.lastRequestError = error.response.status;
                return false;
            })
            .then(response => {
                store.dispatch(articlesActions.getArticle(response.data));
                return true;
            });
    }
}

export default BlogApi;