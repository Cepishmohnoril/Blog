import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Pages
import Home from './components/home';
import Article from './components/article';

const history = createBrowserHistory();

export default (
	<BrowserRouter history={ history }>
		<MainLayout>
			<Switch>
				<Route path="/:id" component={ Article } />
				<Route path="/" component={ Home } />
			</Switch>
		</MainLayout>
	</BrowserRouter>
);
