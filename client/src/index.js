import React from 'react'
import ReactDOM from 'react-dom'
import {Router,browserHistory} from 'react-router'

import routes from './routes'

// import DemoItems from './components/DemoItems'

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	// <DemoItems />,
	document.getElementById('app'));
