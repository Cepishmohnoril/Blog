import React from 'react';
import { connect } from 'react-redux';

class Error extends React.Component {

    render() {
        return (
            <div className="w-container">
                    <img alt='Thank You Mario! But Our Princess Is In Another Castle!' className='error-label' src="/styles/img/err.png" />
                    <div className='error-container'>{ (this.props.api.lastRequestError)?(this.props.api.lastRequestError):("o__0")}</div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        api: state.apiState.api
    };
};

export default connect(mapStateToProps)(Error);