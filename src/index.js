// import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Create new component. Component should produce some HTML
class App extends Component {
	constructor (props) {
		super (props);
		this.state = {
			currentUserName: 'Santa',
			// selectedVideo: null
			};
	}

	render () {
		return (
			<div>
				<h2>Hello {this.state.currentUserName}.</h2>
			</div>
		);
	}
}


// Take this cmponent's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('#container'));
	// instantiated componenet <App /> (self-closing tag), component render target (parent in DOM)
