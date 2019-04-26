import React from 'react';
//import ReactDOM from 'react-dom';
class Timer extends React.Component{

	constructor(props){
		super(props);
		this.state = {second : 0};
		//this.counter = this.counter.bind(this);
		this.tick = this.tick.bind(this);

		// bind the stop function otherwise get erorr Cannot read property 'intervalID' of undefined
		this.stop = this.stop.bind(this);
	}

	counter(){
		this.setState({
			second : this.state.second + 1
		});
	}

	tick(){
		this.intervalID = setInterval(() => this.counter(),100);
	}

	stop(){
		clearInterval(this.intervalID);
	}

	render(){
		return <div>
			<button onClick={ this.tick }>Start</button>
			<button onClick={ this.stop }>Stop</button>
			<h1> Counter: {this.state.second }</h1> 
		</div>;
	}
}



export default Timer;