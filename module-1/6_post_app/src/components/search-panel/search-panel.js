import React, { Component } from 'react'

import '../../css/search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(event) {
        const searchTerm = event.target.value
        this.setState({searchTerm})
        this.props.onUpdateSearch(searchTerm)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск по записям"
                onInput={this.onUpdateSearch}
            />
        )
    }
}
