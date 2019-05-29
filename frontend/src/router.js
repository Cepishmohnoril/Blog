import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Pages
import Home from './components/home';
import Article from './components/article';

const history = createBrowserHistory();

export default (
	<Router history={ history }>
		<MainLayout>
			<Switch>
				<Route path="/:id" component={ Article } />
				<Route path="/" component={ Home } />
			</Switch>
		</MainLayout>
	</Router>
);
