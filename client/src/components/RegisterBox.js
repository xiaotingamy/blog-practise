import React from 'react'
import styles from '../static/css/login.css'

const RegisterForm = React.createClass({
	getInitialState() {
        return {
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    },
    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    },
    handleConfirmPasswordChange(e) {
        this.setState({confirmPassword: e.target.value})
    },
    handleSubmit(e) {
        e.preventDefault();
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        var confirmPassword = this.state.confirmPassword.trim();
        var reg = /[a-zA-Z0-9]{3,}/;
        if (username == '') {
            $.toast('请输入用户名或者邮箱');
            return false;
        } else  if (password == '') {
            $.toast('密码不能为空');
            return false;
        } else if (confirmPassword == '') {
        	$.toast('请再次输入密码');
            return false;
        } else if (!reg.test(password) || !reg.test(confirmPassword)) {
            $.toast('密码格式有误');
            return false;
        } else if (password != confirmPassword) {
        	$.toast('两次输入的密码不一致')
        	return false;
        }
        // this.props.onLoginSubmit({username: username, password: password});
        this.props.onRegisterSubmit({username: username, password: password, confirmPassword: confirmPassword});
        // this.setState({username: '', password: ''});
    },
	render(){
		return (
				<form onSubmit={this.handleSubmit}>
	                <div className="list-block inset">
	                    <ul>
	                        <li>
	                            <div className="item-content">
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="text" placeholder="用户名或者邮箱" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div className="item-content">
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="password" placeholder="密码" maxLength="20" name="password"  value={this.state.password} onChange={this.handlePasswordChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div className="item-content">
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="password" placeholder="再次输入密码" maxLength="20" name="confirmPassword"  value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                    <p>
	                        <button type="submit" className="button button-big button-fill button-full" >注册</button>
	                    </p>
	                </div>
	            </form>
			)
	}
})

const RegisterBox = React.createClass({
	// contextTypes: {
 //        router: React.PropTypes.object
 //    },
    handleRegisterSubmit(registerdata) {
        $.ajax({
            url: '/user/register',
            datatype: 'json',
            type: 'post',
            data: registerdata,
            success: function (data) {
            	alert('request success')
                // if(data.error) {
                //     $.toast('用户名或密码错误！')
                // } else {
                //     window.localStorage.setItem('token',data.access_token);
                //     this.context.router.push('/');
                // }
            }.bind(this),
            error: function (xhr, status, err) {
                $.toast(err);
            }.bind(this)
        })
    },
	render(){
		return (
				<div className="page-group page-current">
	                <div className="content">
	                    <div className={styles.bloglogo}></div>
	                    <RegisterForm  onRegisterSubmit={this.handleRegisterSubmit}/>
	                </div>
	            </div>
			)
	}
})

export default RegisterBox