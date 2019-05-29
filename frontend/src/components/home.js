import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogApi from '../api/blog-api';


class Home extends Component {
    componentDidMount() {
        let api = new BlogApi();
        api.getArticles();
        console.log(this.props);
    }

    render() {
        return (
            <div className="blog-list w-dyn-list">
                <div className="w-dyn-items">
                {this.props.articles.map(article => {
                    return (
                        <div key={article.id} className="w-dyn-item">
                            <div className="post-wrapper">
                                <a className="blog-title-link w-inline-block" href="/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano">
                                    <h1 className="blog-title">{article.title}</h1>
                                </a>
                                <div className="post-info-wrapper">
                                    <div className="post-info">{article.created /*March 2, 2016*/ }</div>
                                    <div className="post-info">|</div>
                                    <a className="post-info when-link" href="/categories/travel">Travel</a>
                                </div>
                                <p className="post-summary">{article.text}</p>
                                <a className="button-round w-button" href="/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano">Continue reading →</a>
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
    articles: state.articlesState.articles
  };
};

export default connect(mapStateToProps)(Home);