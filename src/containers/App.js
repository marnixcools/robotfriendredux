import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {


	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		console.log('start of render');
		const { searchField, onSearchChange, robots, isPending } = this.props;
		console.log(robots);
		const filterdRobots = robots.filter(robot => {
			console.log('in filter lus');
			console.log(robot);
			console.log('searchfield');
			console.log(searchField);
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return (
			<div className='tc'>
			  	<h1 className='f1'>RoboFriend</h1>  
			  	<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					{isPending ? <h1>Loading</h1> :
				  	<ErrorBoundry>
				      	<CardList robots={filterdRobots}/>
					</ErrorBoundry>
					}
			    </Scroll>
			</div>
		);
			
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)