import React from 'react'
import {Link,browserHistory} from 'react-router'
import auth from './Auth'

class App extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        delete localStorage.token;
        browserHistory.push('/login');
    }
	render() {
        return (
            <div className="page-group">
                <div className="page page-home page-current">
                    <div className="content">
                        <div className="content-block index-btns">
                            <p>
                                <Link to="/edit" className="button button-big button-round button-white">
                                    <span>写博客</span>
                                </Link>
                            </p>
                            <p>
                                <Link to="/article/list" className="button button-big button-round button-white">
                                    <span>博客列表</span>
                                </Link>
                            </p>
                        </div>
                        <p className="text-center"><span className="a-link" onClick={this.handleLogout}>退出登录</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default App 