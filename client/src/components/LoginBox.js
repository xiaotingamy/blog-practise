import React from 'react'
import {Route, Link} from 'react-router'
import LoginForm from './LoginForm'
import styles from '../static/css/login.css'
import api from '../api'

export default React.createClass( {
    contextTypes: {
        router: React.PropTypes.object
    },
    handleLoginSubmit(logindata) {
        // $.ajax({
        //     url: '/user/login',
        //     datatype: 'json',
        //     type: 'post',
        //     data: logindata,
        //     success: function (data) {
        //         if(data.code == 0) {
        //             $.toast('用户名或密码错误！')
        //         } else {
        //             localStorage.setItem('token',data.access_token);
        //             this.context.router.push('/');
        //         }
        //     }.bind(this),
        //     error: function (xhr, status, err) {
        //         $.toast(err);
        //     }.bind(this)
        // })
        var that = this;
        api.localLogin(logindata)
        .then(({data}) => {
            console.log(data);
            if (data.code == 0 ) {
                $.toast(data.message)
            } else {
                localStorage.setItem('token',data.access_token);
                that.context.router.push('/')
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    render() {
        return (
            <div className="page-group page-current">
                <div className="content">
                    <div className={styles.bloglogo}></div>
                    <LoginForm  onLoginSubmit={this.handleLoginSubmit}/>
                    <div className={styles.extraLink}>
                        <p><Link to="/forgetpwd">忘记密码？</Link></p>
                        <p className="text-center">还没账号？去<Link to="/register">注册</Link></p>
                    </div>
                </div>
            </div>
        )
    }
})