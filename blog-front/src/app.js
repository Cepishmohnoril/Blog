import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
require('es6-promise').polyfill();

function App() {
	return(<Provider store={store}>{router}</Provider>);
}

export default App;
