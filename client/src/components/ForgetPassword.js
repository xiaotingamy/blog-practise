import React from 'react'
import styles from '../static/css/login.css'
import ImgCaptcha from './ImgCaptcha'

const ForgetPasswordForm = React.createClass({
	getInitialState() {
        return {
            email: '',
            imgCaptcha: ''
        }
    },
    handleEmailChange(e) {
        this.setState({email: e.target.value})
    },
    handleImgCaptchaChange(e) {
        this.setState({imgCaptcha: e.target.value})
    },
    handleSubmit(e) {
        e.preventDefault();
        var email = this.state.email.trim();
        var imgCaptcha = this.state.imgCaptcha.trim();

        var reg_email = /^([a-zA-Z0-9]+[_|\_|\.\-]?)*[a-zA-Z0-9\-]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var reg_captcha = /[a-zA-Z0-9]{4}/;
        if (email == '') {
            $.toast('邮箱不能为空');
            return false;
        } else if (!reg_email.test(email)) {
            $.toast('邮箱地址格式不对');
            return false;
        } else if (imgCaptcha == '') {
        	$.toast('验证码不能为空');
        	return false;
        } else if (!reg_captcha.test(imgCaptcha)) {
        	$.toast('验证码格式不对');
        	return false;
        }
        this.props.onEmailSubmit({email: email, imgCaptcha: imgCaptcha });
    },
	render(){
		return (
				<form onSubmit={this.handleSubmit}>
	                <div className="list-block inset">
	                    <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-media"><i className="lnr lnr-envelope"></i></div>
                                    <div className="item-inner">
                                        <div className="item-input">
                                            <input type="text" placeholder="请输入注册邮箱" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
	                            <div className="item-content">
                                    <div className="item-media"><i className="lnr lnr-lock"></i></div>
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="text" placeholder="请输入验证码" maxLength="4" name="imgCaptcha" value={this.state.imgCaptcha} onChange={this.handleImgCaptchaChange}/>
	                                    </div>
	                                    <ImgCaptcha/>
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                    <p>
	                        <button type="submit" className="button button-big button-fill button-full" >发送验证邮件</button>
	                    </p>
	                </div>
	            </form>
			)
	}
})

const ForgetPassword = React.createClass({
	// contextTypes: {
 //        router: React.PropTypes.object
 //    },
    handleEmailSubmit(emaildata) {
        $.ajax({
            url: '/user/forget',
            datatype: 'json',
            type: 'post',
            data: emaildata,
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
	                    <ForgetPasswordForm  onEmailSubmit={this.handleEmailSubmit}/>
	                </div>
	            </div>
			)
	}
})

export default ForgetPassword