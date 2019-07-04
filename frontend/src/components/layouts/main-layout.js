import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MainLayout extends React.Component{
    constructor(params) {
        super(params);
        this.menuClassesEmpty = {
            home: false,
            about: false,
            contacts: false
        };
        this.menuClasses = Object.assign({}, this.menuClassesEmpty);
    }

    highliteMenu() {
        let location = this.props.location.pathname.substring(1);
        this.menuClasses = Object.assign({}, this.menuClassesEmpty);
        if (this.menuClasses.hasOwnProperty(location)) this.menuClasses[this.props.location.pathname.substring(1)] = true;
    }

    render() {
        this.highliteMenu();
        return(
            <div className="app">
                <div className="sidebar-column">
                    <div className="navigation-bar w-nav" data-animation="default" data-collapse="medium" data-contain="1" data-duration="400">
                        <div className="w-container">
                            <Link to="/" className="logo-link w-nav-brand">
                                <h1 className="logo-text">Why So Serious?</h1>
                            </Link>
                            <nav className="navigation-menu w-nav-menu" role="navigation">
                                <p className="main-subheading w-hidden-medium w-hidden-small w-hidden-tiny">
                                    The Bird of Hermes is my name, Eating my Wings to make me tame.
                                </p>
                                <div className="divider w-hidden-medium w-hidden-small w-hidden-tiny"></div>
                                <Link className={`nav-link w-nav-link ${this.menuClasses.home?'w--current':''}`} to="/home" style={{ maxWidth: '940px' }}>Home</Link>
                                <Link className={`nav-link w-nav-link ${this.menuClasses.about?'w--current':''}`} to="/about" style={{ maxWidth: '940px' }}>About</Link>
                                <Link className={`nav-link w-nav-link ${this.menuClasses.contacts?'w--current':''}`} to="/contacts" style={{ maxWidth: '940px' }}>Contacts</Link>
                                <div className="divider"></div>
                                <div className="social-link-group">
                                    <a href="https://www.facebook.com/cepishmohnoril" className="social-icon-link w-inline-block">
                                        <img src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8ba7_social-03-white.svg" width="25" alt="facebook" />
                                    </a>
                                </div>
                            </nav>
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu"></div>
                            </div>
                        </div>
                        {/*WTF??? VVV*/}
                        <div className="w-nav-overlay" data-wf-ignore=""></div>
                    </div>
                </div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}

export default withRouter(MainLayout);
