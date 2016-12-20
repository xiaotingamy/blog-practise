import React from "react"
import {Link} from "react-router"

var Article = React.createClass({
	render() {
		return (
				<Link to={'/article/detail/'+ this.props.article.id}>
                    <div className="card color-default">
                        <div className="card-content">
                            <div className="card-content-inner">
                                <p>
                                    {this.props.article.title}
                                </p>
                                <p className="color-gray">
                                    发表于 {this.props.article.createTime}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
			)
	}
})

var ArticleList = React.createClass({
	render() {
		var items = [];
		this.props.articles.forEach(function(article){
			items.push(<Article article={article} key={article.id}/>);
		})
		return (
				<div className="list">
					{items}
				</div>
			)
	}
})

var ARTICLES = [
	{
		id: 101, 
		title: '这是第一篇文章', 
		createTime: '2015-12-06 15:12:03', 
		updateTime: '2015-12-12 14:23:00', 
		content: '假设这个字段是文章正文，我是正文正文'
	},
	{
		id: 102, 
		title: '这是第二篇文章', 
		createTime: '2016-12-06 15:02:03', 
		updateTime: '2016-12-12 14:23:00', 
		content: '假设这个字段是文章正文，我是第二篇的正文正文正文正文正文正文'
	},
	{
		id: 103, 
		title: '这是第三篇文章', 
		createTime: '2016-12-06 15:02:03', 
		updateTime: '2016-12-12 14:23:00', 
		content: '假设这个字段是文章正文，我是第三篇的正文正文正文正文正文正文'
	}
]

var ArticleBox = React.createClass({
	render() {
		return (
			<div className="page-group">
        		<div className="page page-current">
					<ArticleList articles={ARTICLES} />
				</div>
			</div>
		)
	}
})

export default ArticleBox