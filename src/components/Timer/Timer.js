import React, {Component} from 'react';

class Timer extends Component {
  constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return(
			<div style={{color: 'white', padding: '10px'}}>
				<p className="f7">{this.state.date.toString().substring('G', '25')}</p>
			</div>
		);
	}
}

export default Timer;
