import React from 'react'
import {Route,IndexRoute} from 'react-router'

import App from './components/App'
import LoginBox from './components/LoginBox'
import RegisterBox from './components/RegisterBox'
import ForgetPassword from './components/ForgetPassword'
import auth from './components/Auth'
import ArticleBox from './components/ArticleBox'


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
    })
  }
}
const Logout = React.createClass({
	contextTypes: {
		router: React.PropTypes.object
	},
	componentDidMount() {
		auth.logout();
		this.context.router.push('/');
	},
	render() {
		return (<div></div>)
	}
})

var routes = (
	<div>
		<Route path="/" component={App} onEnter={requireAuth}></Route>
		<Route path="/login" component={LoginBox}/>
		<Route path="/logout" component={Logout}/>
		<Route path="/register" component={RegisterBox}/>
		<Route path="/forgetpsd" component={ForgetPassword}/>
		<Route path="/articles" component={ArticleBox} />
    </div>
);

export default routes;
