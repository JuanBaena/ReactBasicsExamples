import React, {Component} from 'react';
import './App.css';

import Articles from './components/Articles';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {sortingMode: "Upvoted"};
        // This binding is necessary to make `this` work in the callback
        this.handleMostUpvoted = this.handleMostUpvoted.bind(this);
        this.handleMostRecent = this.handleMostRecent.bind(this);
    }

    handleMostUpvoted() {
        this.setState({sortingMode: "Upvoted"});
    }

    handleMostRecent() {
        this.setState({sortingMode: "Recent"});
    }

    render() { 
        return (
            <div className="App">
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                    <button onClick={this.handleMostUpvoted} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                    <button onClick={this.handleMostRecent} data-testid="most-recent-link" className="small">Most Recent</button>
                </div>
                <Articles
                    articles={this.props.articles}
                    sortingMode={this.state.sortingMode}
                />
            </div>
        );
    }
}
 
export default App;
