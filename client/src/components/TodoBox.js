import React from 'react'
import ReactDOM from 'react-dom'
import localdb from 'localdb'

class TodoHeader extends React.Component {
	constructor(props) {
		super(props);
		this.handlerKeyUp = this.handlerKeyUp.bind(this);
	}
	handlerKeyUp(event){
		if (event.keyCode == 13) { //如果按回车键
			let value = event.target.value;
			if (!value) return false;

			let newTodoItem = {
				text: value,
				isDone: false
			}
			this.props.addTodo(newTodoItem);
			event.target.value = '';
		}
	}
	render() {
		return (
				<div>
					<input type="text" placeholder="写下你要做的事情吧~" onKeyUp={this.handlerKeyUp}/>
				</div>
			)
	}
}

class TodoFooter extends React.Component {
	handleChange(){
		let isAllChecked = !this.props.isAllChecked;
		this.props.changeTodoState(null, isAllChecked ,true)
	}
	handleClearDone() {
		this.props.clearDone()
	}
	render() {
		return (
				<div>
					<input type="checkbox" checked={this.props.isAllChecked} onChange={this.handleChange.bind(this)}/>
					<span>{this.props.isDoneCount}已完成/{this.props.totalCount}总数</span>
					<button className="pull-right" onClick={this.handleClearDone.bind(this)}>清除已完成</button>
				</div>
			)
	}
}

class TodoItem extends React.Component {
	handleMouseOver() {
		ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'block';
	}
	handleMouseOut() {
		ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = 'none';
	}
	handleChange() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone)
	}
	handleDelete() {
		this.props.deleteTodo(this.props.index)
	}
	render() {
		let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'}
		return (
				<li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
					<input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
					<span style={doneStyle}>{this.props.text}</span>
					<button ref="deleteBtn" className="pull-right" style={{'display': 'none'}} onClick={this.handleDelete.bind(this)}>清除</button>
				</li>
			)
	}
}

class TodoMain extends React.Component {
	render() {
		return (
				<ul>
					{
						this.props.todos.map((todo,index)=>
							<TodoItem key={index} {...todo} index={index} {...this.props}/>
						)
					}
				</ul>
			)
	}
}

export default class App extends React.Component{
	constructor(props) {
		super(props);
		this.db = new localdb('React-todos','Object')
		this.state = {
			todos: this.db.get('todos') || [],
			isAllChecked: false
		}
	}
	allChecked() {
		let isAllChecked = false;
		if (this.state.todos.every((todo)=> todo.isDone)) {
			isAllChecked = true;
		}
		this.setState({
			todos: this.state.todos,
			isAllChecked: isAllChecked
		})
	}
	addTodo(item){
		this.state.todos.push(item);
		this.allChecked();
		this.db.set('todos',this.state.todos);
	}
	deleteTodo(index){
		this.state.todos.splice(index,1);
		this.setState({
			todos: this.state.todos
		});
		this.allChecked();
		this.db.set('todos',this.state.todos);
	}
	changeTodoState(index, isDone, isChangeAll=false){
		if (isChangeAll) {
			this.setState({
				todos: this.state.todos.map((todo) => {
					todo.isDone = isDone;
					return todo
				}),
				isAllChecked: isDone
			})
		} else {
			this.state.todos[index].isDone = isDone;
			this.allChecked();
		}
		this.db.set('todos',this.state.todos)
	}
	clearDone(){
		let todos = this.state.todos.filter((todo) => !todo.isDone);
		this.setState({
			todos: todos,
			isAllChecked: false
		});

		this.db.set('todos',todos);
	}
	render() {
		var props={
			totalCount: this.state.todos.length || 0,
			isDoneCount: (this.state.todos && this.state.todos.filter((todo)=> todo.isDone)).length || 0
		}
		return (
				<div>
					<TodoHeader addTodo={this.addTodo.bind(this)}/>
					<TodoMain todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)} deleteTodo={this.deleteTodo.bind(this)} />
					<TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...props} changeTodoState={this.changeTodoState.bind(this)}/>
				</div>
			)
	}

}