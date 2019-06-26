import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router";

class Home extends React.Component {
    currentPage: number;

    componentDidMount() {
        this.currentPage = 0;
        this.getOneMorePage();
    }

    getOneMorePage() {
        this.props.api.getArticles(++this.currentPage);
    }

    render() {
        if(this.props.api.lastRequestError) {
            return(
                <Redirect to="/error" />
            );
        }

        if (this.currentPage < this.props.totalPages) {
            var pagination = (
                <div className="blog-list-pagination-container">
                    <button className="button-round w-button" onClick={() => this.getOneMorePage()}>Next page →</button>
                </div>
            );
        }

        return (
            <div className="blog-list-with-pagination">
                <div className="blog-list w-dyn-list">
                    <div className="w-dyn-items">
                    {this.props.articles.map(article => {
                        return (
                            <div key={article.id} className="w-dyn-item">
                                <div className="post-wrapper">
                                    <Link to={'/'+article.id} className="blog-title-link w-inline-block">
                                        <h1 className="blog-title">{article.title}</h1>
                                    </Link>
                                    <div className="post-info-wrapper">
                                        <div className="post-info">{article.created /*March 2, 2016*/ }</div>
                                        <div className="post-info">|</div>
                                        <a className="post-info when-link" href="/categories/travel">Travel</a>
                                    </div>
                                    <p className="post-summary">{article.text}</p>
                                    <Link to={'/'+article.id} className="button-round w-button">Continue reading →</Link>
                                </div>
                            </div>
                        );
                    })}
                   </div>
                </div>
                {pagination}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        articles: state.articlesState.articles,
        totalPages: state.articlesState.totalPages,
        api: state.apiState.api
    };
};

//Выяснить как это работает???
export default connect(mapStateToProps)(Home);