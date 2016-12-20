import React from 'react'
import {Link} from 'react-router'
import auth from './Auth'

export default React.createClass({
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
                                <Link to="/articles" className="button button-big button-round button-white">
                                    <span>博客列表</span>
                                </Link>
                            </p>
                        </div>
                        <p className="text-center"><Link className="a-link" to="/logout">退出登录</Link></p>
                    </div>
                </div>
            </div>
        )
    }
});
