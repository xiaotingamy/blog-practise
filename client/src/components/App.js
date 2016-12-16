import React from 'react'
import {Link} from 'react-router'
import auth from './Auth'

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	/* initial state, this is ES6 syntax (classes) */ 
		};
  	}
	handleLogout(e) {
		auth.logout()
	}
	render() {
        return (
            <div className="page-group">
                <div className="page page-home page-current">
                    <div className="content">
                        <div className="content-block index-btns">
                            <p>
                                <Link to="/write" className="button button-big button-round button-white">
                                    <span>写博客</span>
                                </Link>
                            </p>
                            <p>
                                <Link to="/list" className="button button-big button-round button-white">
                                    <span>博客列表</span>
                                </Link>
                            </p>
                        </div>
                        <p className="text-center" onClick={this.handleLogout} >退出登录</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default App