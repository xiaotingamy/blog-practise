import React from 'react'
import styles from '../static/css/login.css'

const RegisterForm = React.createClass({
	getInitialState() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
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
    handleEmailChange(e) {
        this.setState({email: e.target.value})
    },
    handleSubmit(e) {
        e.preventDefault();
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        var confirmPassword = this.state.confirmPassword.trim();
        var email = this.state.email.trim();

        var reg_pwd = /[a-zA-Z0-9]{3,}/;
        var reg_email = /^([a-zA-Z0-9]+[_|\_|\.\-]?)*[a-zA-Z0-9\-]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (username == '') {
            $.toast('用户名不能为空');
            return false;
        } else  if (password == '') {
            $.toast('请输入您的账号密码');
            return false;
        } else if (!reg_pwd.test(password)) {
            $.toast('密码范围在3~20位之间');
            return false;
        } else if (confirmPassword == '') {
            $.toast('请输入确认密码');
            return false;
        } else if(!reg_pwd.test(confirmPassword)) {
            $.toast('密码范围在3~20位之间');
            return false;
        } else if (password != confirmPassword) {
        	$.toast('您两次输入的账号密码不一致');
        	return false;
        } else if (email == '') {
            $.toast('邮箱不能为空');
            return false;
        } else if (!reg_email.test(email)) {
            $.toast('邮箱地址格式不对');
            return false;
        }
        // this.props.onLoginSubmit({username: username, password: password});
        this.props.onRegisterSubmit({username: username, password: password, confirmPassword: confirmPassword, email: email});
        // this.setState({username: '', password: ''});
    },
	render(){
		return (
				<form onSubmit={this.handleSubmit}>
	                <div className="list-block inset">
	                    <ul>
	                        <li>
	                            <div className="item-content">
                                    <div className="item-media"><i className="lnr lnr-user"></i></div>
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="text" placeholder="用户名" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div className="item-content">
                                    <div className="item-media"><i className="lnr lnr-lock"></i></div>
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="password" placeholder="设置密码" maxLength="20" name="password"  value={this.state.password} onChange={this.handlePasswordChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                        <li>
	                            <div className="item-content">
                                    <div className="item-media"><i className="lnr lnr-lock"></i></div>
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="password" placeholder="确认密码" maxLength="20" name="confirmPassword"  value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-media"><i className="lnr lnr-envelope"></i></div>
                                    <div className="item-inner">
                                        <div className="item-input">
                                            <input type="text" placeholder="邮箱" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
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