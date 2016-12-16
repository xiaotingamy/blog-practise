import React from 'react'
import {Route} from 'react-router'
import LoginForm from './LoginForm'
import styles from '../static/css/login.css'

function status(response) {
    if (response.status >= 200 && response.status <300) {
        return response
    }
    throw new Error(response.statusText);
}

function json(response) {
    return response.json()
}

export default React.createClass( {
    contextTypes: {
        router: React.PropTypes.object
    },
    handleLoginSubmit(logindata) {
        $.ajax({
            url: '/user/login',
            datatype: 'json',
            type: 'post',
            data: logindata,
            success: function (data) {
                if(data.error) {
                    $.toast('用户名或密码错误！')
                } else {
                    window.localStorage.setItem('token',data.access_token);
                    this.context.router.push('/');
                }
            }.bind(this),
            error: function (xhr, status, err) {
                $.toast(err);
            }.bind(this)
        })
    },
    render() {
        return (
            <div className="page-group page-current">
                <div className="content">
                    <div className={styles.bloglogo}></div>
                    <LoginForm  onLoginSubmit={this.handleLoginSubmit}/>
                </div>
            </div>
        )
    }
})