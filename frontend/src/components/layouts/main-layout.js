import React from 'react';

function MainLayout(props) {
	return(
		<div className="app">
			<div>Layout</div>
			<main>{props.children}</main>
		</div>
	);
}

export default MainLayout;
