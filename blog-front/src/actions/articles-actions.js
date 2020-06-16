export const GET_ARTICLES = 'GET_ARTICLES';
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES';
export const GET_ARTICLE = 'GET_ARTICLE';

export function getArticles(data) {
	return {
		type: GET_ARTICLES,
		data
	}
}

export function clearArticles() {
	return {
		type: CLEAR_ARTICLES
	}
}

export function getArticle(data) {
	return {
		type: GET_ARTICLE,
		data
	}
}