export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLE = 'GET_ARTICLE';

export function getArticles(articles) {
	return {
		type: GET_ARTICLES,
		articles
	}
}

export function getArticle(article) {
	return {
		type: GET_ARTICLE,
		article
	}
}