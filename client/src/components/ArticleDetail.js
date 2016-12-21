import React from "react"

export default React.createClass({
	render() {
		let { articleId } = this.props.params

		return (
				<div>文章id是 {articleId} </div>
			)
	}
})