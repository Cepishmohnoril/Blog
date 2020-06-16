import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//Layouts
import MainLayout from './components/layouts/main-layout';

//Pages
import Home from './components/home';
import Article from './components/article';
import Error from './components/error';
import About from './components/about';
import Contacts from './components/contacts';

const history = createBrowserHistory();

export default (
    <Router history={ history }>
        <MainLayout>
            <Switch>
                <Route exact path="/home" component={ Home } />
                <Route exact path="/error" component={ Error } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/contacts" component={ Contacts } />
                <Route exact path="/:id" component={ Article } />
                <Redirect exact from="/" to="/home" />
                <Redirect to="/error" />
            </Switch>
        </MainLayout>
    </Router>
);
