import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components/App.js'
import LoginBox from './components/LoginBox';

ReactDOM.render(
	<LoginBox url='/user/login' />,
	document.getElementById('app'));