import React from 'react'
import LoginForm from './LoginForm'

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
    handleLoginSubmit(logindata) {
        // $.ajax({
        //     url: this.props.url,
        //     datatype: 'json',
        //     type: 'post',
        //     data: logindata,
        //     success: function (data) {
        //         alert('success')
        //     }.bind(this),
        //     error: function (xhr, status, err) {
        //         alert(err);
        //     }.bind(this)
        // })
        var req = new Request(this.props.url, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }, 
            body: logindata
        });
        fetch(req)
        .then(status)
        .then(json)
        .then(function(json){
            alert('Request success');
        }).catch(function(error){
            alert(error)
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