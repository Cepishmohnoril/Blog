import React from 'react';

function MainLayout(props) {
	return(
		<div className="app">
			<div className="sidebar-column">
                <div className="navigation-bar w-nav" data-animation="default" data-collapse="medium" data-contain="1" data-duration="400">
                    <div className="w-container">
                        <a className="logo-link w-nav-brand" href="#">
                            <h1 className="logo-text">Why So Serious?</h1>
                        </a>
                        <nav className="navigation-menu w-nav-menu" role="navigation">
                            <p className="main-subheading w-hidden-medium w-hidden-small w-hidden-tiny">
                                The Bird of Hermes is my name, Eating my Wings to make me tame.
                            </p>
                            <div className="divider w-hidden-medium w-hidden-small w-hidden-tiny"></div>
                            <a className="nav-link w-nav-link w--current" href="/" style={{ maxWidth: '940px' }}>Home</a>
                            <a className="nav-link w-nav-link" href="/about" style={{ maxWidth: '940px' }}>About</a>
                            <a className="nav-link w-nav-link" href="/contact" style={{ maxWidth: '940px' }}>Contact</a>
                            <div className="divider"></div>
                            <div className="social-link-group">
                                <a className="social-icon-link w-inline-block" href="#">
                                    <img src="http://uploads.webflow.com/56d6955f710a7126338b8b1c/56d6955f710a7126338b8ba7_social-03-white.svg" width="25" />
                                </a>
                            </div>
                        </nav>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                    <div className="w-nav-overlay" data-wf-ignore=""></div>
                </div>
            </div>
			<div className="content">{props.children}</div>
		</div>
	);
}

export default MainLayout;
