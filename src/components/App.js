import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import ButtonAdd from '../containers/ButtonAdd';
import PostList from '../containers/PostList';
import FormAdd from '../containers/FormAdd';

const Home = () => (
	<div>
		<ButtonAdd />
		<PostList />
	</div>
)

class App extends Component {

	render() {
		return (
			<Router>
				<div className="container">
					<Route path="/" exact component={Home} />
					<Route path="/add-post" component={FormAdd} />				
				</div>
			</Router>
		);
	}
}

export default App;
