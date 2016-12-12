import React from 'react'
import LoginForm from './LoginForm'
import $ from 'jquery'

export default React.createClass( {
    handleLoginSubmit(logindata) {
      $.ajax({
          url: this.props.url,
          datatype: 'json',
          type: 'post',
          data: logindata,
          success: function (data) {
              alert('success')
          }.bind(this),
          error: function (xhr, status, err) {
              alert(err);
          }.bind(this)
      })
    },
    render() {
        return (
            <div className="page-group">
                <div className="content">
                    <LoginForm  onLoginSubmit={this.handleLoginSubmit}/>
                </div>
            </div>
        )
    }
})