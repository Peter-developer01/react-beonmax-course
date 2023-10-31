import React, { Component } from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import '../../css/app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, key: this.randomUUID()},
                {label: 'That is so good!', important: false, key: this.randomUUID()},
                {label: 'I don\'t need a break.', important: false, key: this.randomUUID()},
            ]
        };
    }

    randomUUID() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    deletePost = (key) => {
        /* this.setState(({data}) => ({
            data: data.filter(post => post.key !== key)
        })); */
        this.setState(({data}) => {
            const index = data.findIndex(item => item.key === key)
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            return {
                data: [...before, ...after]
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>

                <PostList
                    posts={this.state.data}
                    onDelete={this.deletePost}
                />

                <PostAddForm/>
            </div>
        )
    }
}
