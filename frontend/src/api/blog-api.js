import axios from 'axios';
import http from 'http';
import https from 'https';
import store from '../store';
import * as articlesActions from '../actions/articles-actions'

export const HTTP_SUCCESS = 200;
export const HTTP_NOT_FOUND = 404;
export const HTTP_SERVER_ERROR = 500;

class BlogApi {

    constructor() {
        // eslint-disable-next-line
        this.lastRequestError = false;

        this.api = axios.create({
            baseURL: process.env.REACT_APP_API,
            httpAgent: new http.Agent({
                keepAlive: true,
            }),
            httpsAgent: new https.Agent({
                keepAlive: true,
            }),
        });
    }

    getArticles(page) {
        this.lastRequestError = false;
        return this.api.get('/articles/' + page)
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
        return this.api.get('/article/'+id)
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