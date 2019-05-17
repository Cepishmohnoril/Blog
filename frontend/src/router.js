import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Pages
import Home from './components/containers/home';
import Post from './components/containers/post';

const history = createBrowserHistory();

export default (
	<BrowserRouter history={ history }>
		<MainLayout>
			<Switch>
				<Route path="/:id" component={ Post } />
				<Route path="/" component={ Home } />
			</Switch>
		</MainLayout>
	</BrowserRouter>
);
