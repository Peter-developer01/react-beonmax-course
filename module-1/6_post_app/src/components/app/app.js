import React, { Component } from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import '../../css/app.css'

import nextId from 'react-id-generator';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, key: nextId()},
                {label: 'That is so good!', important: false, like: false, key: nextId()},
                {label: 'I don\'t need a break.', important: false, like: false, key: nextId()},
            ],
            searchTerm: '',
            filter: 'all',
        };
    }

    deletePost = (key) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.key === key)
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            return {
                data: [...before, ...after]
            }
        })
    }

    addPost = (post) => {
        const newPost = {
            label: post,
            important: false,
            key: nextId()
        }

        this.setState(({data}) => {
            const newArr = [...data, newPost]
            return {
                data: newArr
            }
        })
    }

    onToggleImportant = (key) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.key === key)
            const old = data[index]
            const newItem = {...old, important: !old.important}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLiked = (key) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.key === key)
            const old = data[index]
            const newItem = {...old, like: !old.like}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onUpdateSearch = (searchTerm) => {
        this.setState({searchTerm})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else if (filter === 'important') {
            return items.filter(item => item.important)
        } else {
            return items
        }
    }

    render() {
        const {data, searchTerm, filter} = this.state
        const liked = data.filter(item => item.like).length
        const allPosts = data.length
        const visiblePosts = this.filterPost(this.searchPost(data, searchTerm), filter)

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />

                <PostAddForm
                    onAdd={this.addPost}
                />
            </div>
        )
    }
}
