import React from  'react'

export default React.createClass( {
    getInitialState() {
        return {
            username: '',
            password: ''
        }
    },
    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    },
    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    },
    handleSubmit(e) {
        e.preventDefault();
        var username = this.state.username.trim();
        var password = this.state.password.trim();
        var reg = /[a-zA-Z0-9]{3,}/;
        if (username == '') {
            $.toast('用户名不能为空');
            return false;
        } else  if (password == '') {
            $.toast('密码不能为空');
            return false;
        } else if (!reg.test(password)) {
            $.toast('密码格式有误');
            return false;
        }
        this.props.onLoginSubmit({username: username, password: password});
        // this.setState({username: '', password: ''});
    },
    render() {
        return (
            <form className="loginform" onSubmit={this.handleSubmit}>
                <div className="list-block inset">
                    <ul>
                        <li>
                            <div className="item-content">
                                <div className="item-inner">
                                    <div className="item-input">
                                        <input type="text" placeholder="用户名/邮箱" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
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
                    </ul>
                    <p>
                        <button type="submit" className="button button-big button-fill button-full" >登录</button>
                    </p>
                </div>
            </form>
        )
    }
})