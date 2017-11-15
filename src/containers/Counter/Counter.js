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
				<CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
				<CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
				<CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
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
		increment: () => dispatch({ type: Type.INCREMENT })
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);