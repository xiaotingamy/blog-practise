import React from 'react'
import ReactDOM from 'react-dom'
import {Router,browserHistory} from 'react-router'

import routes from './routes'
// import ImageList from './components/ImageList'

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	// <ImageList />,
	document.getElementById('app'));
