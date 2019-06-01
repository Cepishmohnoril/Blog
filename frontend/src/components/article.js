import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Article extends React.Component {
    componentDidMount() {
        this.props.api.getArticle(this.props.match.params.id);
    }

    render() {
        return(
            <div className="w-container">
                <div className="post-title-section">
                    <h1>{ this.props.article.title }</h1>
                    <div className="post-info-wrapper">
                        <div className="post-info">{ this.props.article.created /*March 2, 2016*/}</div>
                        <div className="post-info">|</div>
                        <a className="post-info when-link" href="/categories/travel">Travel</a>
                    </div>
                </div>
                <div className="body-copy w-richtext">
                    { this.props.article.text }
                </div>
                <div className="button-wrapper">
                    <button className="button w-button" onClick={() => this.props.history.goBack()}>←&nbsp;Go back</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
console.log(state);
    return {
        article: state.articleState.article,
        api: state.apiState.api
    };
};

export default connect(mapStateToProps)(withRouter(Article));
