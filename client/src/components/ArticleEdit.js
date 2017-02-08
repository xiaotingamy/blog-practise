import React from 'react'


class ArticleEditForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			content: ''
		}
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleTitleChange(e) {
		this.setState({
			title: e.target.value
		})
	}
	handleContentChange(e) {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit(e){
		e.preventDefault();
		var title = this.state.title.trim();
		var content = this.state.content.trim();

		if (title == '') {
			$.toast('文章标题不能为空');
			return false;
		} else if (content == '') {
			$.toast('文章内容不能为空');
			return false;
		}
		$.ajax({
			url: '/edit',
            datatype: 'json',
            type: 'post',
            data: {
            	title: title,
            	content: content
            },
            success: function (data) {
            	alert('request success')
                // if(data.error) {
                //     $.toast('用户名或密码错误！')
                // } else {
                //     window.localStorage.setItem('token',data.access_token);
                //     this.context.router.push('/');
                // }
            },
            error: function (xhr, status, err) {
                $.toast(err);
            }
		})
	}
	componentDidMount() {
		var bodyHeight = document.body.clientHeight;
		var titleHeight = document.getElementsByTagName('li')[0].scrollHeight;
		var buttonHeight = document.getElementsByTagName('button')[0].scrollHeight;
		var height = bodyHeight - titleHeight - buttonHeight + 'px';
		document.getElementsByTagName('textarea')[0].style.height = height;
	}
	render() {
		return (
				<form onSubmit={this.handleSubmit}>
					<div className="list-block no-margin">
	                    <ul>
	                        <li>
	                            <div className="item-content">
	                                <div className="item-media"><i className="lnr lnr-pencil"></i></div>
	                                <div className="item-inner">
	                                    <div className="item-input">
	                                        <input type="text" placeholder="请输入文章标题" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
	                                    </div>
	                                </div>
	                            </div>
	                        </li>
	                        <li className="align-top">
								<div className="item-content">
									<div className="item-media"><i className="lnr lnr-menu"></i></div>
									<div className="item-inner">
										<div className="item-input">
											<textarea placeholder="请输入文章内容" value={this.state.content} onChange={this.handleContentChange}></textarea>
										</div>
									</div>
								</div>
							</li>
	                    </ul>
	                    <button type="submit" className="button button-big button-fill button-full">完成</button>
	                </div>
                </form>
			)
	}
}
export default ArticleEditForm