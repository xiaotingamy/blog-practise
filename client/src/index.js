import React from 'react'
import ReactDOM from 'react-dom'
import {Router,browserHistory} from 'react-router'

import routes from './routes'

import App from './components/TodoBox'

ReactDOM.render(
	// <Router history={browserHistory} routes={routes} />,
	<App />,
	document.getElementById('app'));
