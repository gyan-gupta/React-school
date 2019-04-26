import React from 'react';
import ReactDOM from 'react-dom';
class Timer extends React.Component{

	constructor(props){
		super(props);
		this.state = {second : 0};
		//this.counter = this.counter.bind(this);
		//this.tick = this.tick.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
	}

	counter(){
		this.setState({
			second : this.state.second + 1
		});
	}

	
	componentDidMount() {
    	this.intervalID = setInterval(() => this.counter(), 100);
  	}

  	
  	stop(){
		clearInterval(this.intervalID);
		this.intervalID = 0;
	}


	reset(){
		this.setState({
			second : 0
		});
		if(this.intervalID === 0){
			this.intervalID = setInterval(() => this.counter(), 100);	
		}
		
		console.log(this.intervalID);
	}

	render(){
		return <div>
			<button >Start</button>
			<button onClick={ this.stop }>Stop</button>
			<button onClick={ this.reset }>Reset</button>
			<h1> Counter: {this.state.second }</h1> 
		</div>;
	}
}



export default Timer;