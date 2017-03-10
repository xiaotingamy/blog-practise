import React from "react"
import {Link} from "react-router"
import InfiniteScroll from './InfiniteScroll'
import qwest from 'qwest'
import api from '../api'

// qwest.`method`(`url`, `data`, `options`, `before`)
//      .then(function(xhr, response) {
//         // Run when the request is successful
//      })
//      .catch(function(e, xhr, response) {
//         // Process the error
//      })
//      .complete(function() {
//         // Always run
//      });

class Article extends React.Component {
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
                                    发表于 {this.props.article.create_time}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
			)
	}
}

class ArticleList extends React.Component {
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
}
class ArticleBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			articles: [],
			hasMoreItems: true
		}
	}
	componentWillMount() {
        api.getArticleList()
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
	}
	render() {
		const loader = <div>Loading</div>;
		return (
			<div className="page-group">
        		<div className="page page-current">
					<ArticleList articles={this.state.articles}/>
				</div>
			</div>
		)
	}
}
export default ArticleBox

// var ARTICLES = [
// 	{
// 		id: 101, 
// 		title: '这是第一篇文章', 
// 		createTime: '2015-12-06 15:12:03', 
// 		updateTime: '2015-12-12 14:23:00', 
// 		content: '假设这个字段是文章正文，我是正文正文'
// 	},
// 	{
// 		id: 102, 
// 		title: '这是第二篇文章', 
// 		createTime: '2016-12-06 15:02:03', 
// 		updateTime: '2016-12-12 14:23:00', 
// 		content: '假设这个字段是文章正文，我是第二篇的正文正文正文正文正文正文'
// 	},
// 	{
// 		id: 103, 
// 		title: '这是第三篇文章', 
// 		createTime: '2016-12-06 15:02:03', 
// 		updateTime: '2016-12-12 14:23:00', 
// 		content: '假设这个字段是文章正文，我是第三篇的正文正文正文正文正文正文'
// 	}
// ]

// class ArticleBox extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		articles: [],
	// 		hasMoreItems: true
	// 	}
	// }
	// loadItems(page) {
	// 	var self = this;
	// 	// 请求文章列表的api
	// 	var url = '/list/' + page;

	// 	qwest.get(url)
	// 	.then((xhr,response) => {
	// 		if (response) {
	// 			var articles = self.state.articles;
	// 			response.articles.map((article) => {
	// 				articles.push(article)
	// 			})
	// 			//返回的数据中需要一个总页数，当前页等于总页数时就没有更多了  hasMoreItems为false
	// 			if(page < response.pages) {
 //                    self.setState({
 //                        articles: articles
 //                    });
 //                } else {
 //                    self.setState({
 //                        hasMoreItems: false
 //                    });
 //                }
	// 		}
	// 	})
	// 	.catch((e, xhr, response) => {
	// 		// Process the error
	// 	})
	// }

	// 滚动加载数据
	// <InfiniteScroll 
	// pageStart={0}
 //    loadMore={this.loadItems.bind(this)}
	// hasMore={this.state.hasMoreItems}
	// loader={loader}>
	// 	<ArticleList articles={this.state.articles} />
	// </InfiniteScroll>
// 	render() {
// 		const loader = <div>Loading</div>;
// 		return (
// 			<div className="page-group">
//         		<div className="page page-current">
					
// 					<ArticleList articles={ARTICLES}/>
// 				</div>
// 			</div>
// 		)
// 	}
// }

