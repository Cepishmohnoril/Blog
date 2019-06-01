import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        this.props.api.getArticles();
    }

    render() {
        return (
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
        );
    }
}

const mapStateToProps = function(state) {
    return {
        articles: state.articlesState.articles,
        api: state.apiState.api
    };
};

export default connect(mapStateToProps)(Home);