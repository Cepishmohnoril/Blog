import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Pages
import Home from './components/containers/home';

const history = createBrowserHistory();

export default (
	<BrowserRouter history={ history }>
		<MainLayout>
			<Route path="/" component={ Home } />
		</MainLayout>
	</BrowserRouter>
);
