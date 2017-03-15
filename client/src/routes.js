import React from 'react'
import {Route,IndexRoute} from 'react-router'

import App from './components/App'
import LoginBox from './components/LoginBox'
import RegisterBox from './components/RegisterBox'
import ForgetPassword from './components/ForgetPassword'
import auth from './components/Auth'
import ArticleBox from './components/ArticleBox'
import ArticleEdit from './components/ArticleEdit'
import ArticleAdd from './components/ArticleAdd'
import ArticleDetail from './components/ArticleDetail'


function requireAuth(nextState, replace) {
	if (!auth.loggedIn()) {
		replace({
			pathname: '/login',
		})
	}
}

var routes = (
	<div>
		<Route path="/" component={App} onEnter={requireAuth}></Route>
		<Route path="/login" component={LoginBox}/>
		<Route path="/register" component={RegisterBox}/>
		<Route path="/forgetpwd" component={ForgetPassword}/>
		<Route path="/article/list" component={ArticleBox} />
		<Route path="/edit/:articleId" component={ArticleEdit}/>
		<Route path="/add" component={ArticleAdd}/>
		<Route path="/article/info/:articleId" component={ArticleDetail} />
    </div>
);

export default routes;
