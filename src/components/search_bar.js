import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearch(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input placeholder="Search" value={this.state.term} onChange={this.handleInputChange} />
            </div>
        );
    }
}

export default SearchBar;