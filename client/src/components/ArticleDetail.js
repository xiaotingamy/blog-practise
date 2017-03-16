import React from "react"
import {Link,browserHistory} from 'react-router'
import api from '../api'

class ArticleDetail extends React.Component{
	constructor(props){
		super(props);
		this.handleToEdit = this.handleToEdit.bind(this);
		this.state = {
			title:'',
			content:'',
			update_time: ''
		}
	}
	handleToEdit(e){
		e.preventDefault();
		let { articleId } = this.props.params;
		let path = '/edit/'+articleId;
		browserHistory.push(path);

	}
	componentWillMount(){
		let { articleId } = this.props.params;
		let self = this;
		api.getOneArticle(articleId)
		.then(({data}) => {
			console.log(data);
			self.setState({
				title: data.title,
				content: data.content,
				update_time: data.update_time
			})
		})
		.catch((error) => {
			delete localStorage.token;
    		browserHistory.push('/login');
    		console.log(error.response.data)
		})
	}
	render() {	
		return (
				<div className="page-white">
					<div className="content-padded">
						<h3>{this.state.title}<a onClick={this.handleToEdit}><i className="lnr lnr-pencil"></i></a></h3>
						<p className="time">{this.state.update_time}</p>
						<p>{this.state.content}</p>
					</div>
				</div>
			)
	}
}
export default ArticleDetail
