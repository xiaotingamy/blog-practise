import React from 'react'
import ReactPullToRefresh from './ReactPullToRefresh'

let count = 1;
export default class DemoItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items:[
				<div key={'item' + count}>Item {count++}</div>
			]
		}
	}
	handleRefresh(resolve,reject) {
		let self = this;
		setTimeout(function(){
			self.addItem() ? resolve() : reject();
		},1000)
	}
	addItem() {
		this.state.items.push(<div key={'item-' + count}>Item {count++}</div>);
		this.setState({
			items: this.state.items
		});
		return true;
	}
	render() {
		return (
				<ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} hammerOptions={{touchAction: 'auto'}} style={{textAlign: 'center'}}>
					<h3>pull to Refresh</h3>
					<div>
						{this.state.items}
					</div>
				</ReactPullToRefresh>
			)
	}
}