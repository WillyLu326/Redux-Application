import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import Type from './../../Type';

class Counter extends Component {

	render() {
		return (
			<div>
				<CounterOutput value={this.props.counter} />
				<CounterControl label="Increment" clicked={this.props.increment} />
				<CounterControl label="Decrement" clicked={this.props.decrement} />
				<CounterControl label="Add 5" clicked={() => this.props.add(5)} />
				<CounterControl label="Subtract 5" clicked={() => this.props.remove(5)} />
			</div>
		);
	}
}

const mapStateToProps = globalState => {
	return {
		counter: globalState.counter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({ type: Type.INCREMENT }),
		decrement: () => dispatch({ type: Type.DECREMENT }),
		add: (number) => dispatch({ type: Type.ADD, value: number }),
		remove: (number) => dispatch({ type: Type.REMOVE, value: number })
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);