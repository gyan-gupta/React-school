import React from 'react';
import ReactDOM from 'react-dom';
class Timer extends React.Component{

	constructor(props){
		super(props);
		this.state = {second : 1};
		this.counter = this.counter.bind(this);
	}

	counter(){
		this.setState({
			second : this.state.second + 1
		});
	}

	render(){
		return <div>
		<button onClick={ this.counter }>click me</button>
		<h1> Counter: {this.state.second }</h1> </div>;
	}
}



export default Timer;