import React from 'react'
import styles from '../static/css/login.css'

class ImgCaptcha extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl : 'http://ui.cn/code'
		};
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e){
		e.preventDefault();
		this.setState({
			imgUrl : 'http://ui.cn/code?' + Math.random()
		})
	}
	render(){
		return (
				<div>
					<img className={styles.imgcaptcha} src={this.state.imgUrl} alt="换一张" onClick={this.handleClick}/>
				</div>
			)
	}
}

export default ImgCaptcha