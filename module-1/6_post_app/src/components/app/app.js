import React from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import '../../css/app.css'

const App = () => {
    function randomUUID() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    const data = [
        {label: 'Going to learn React', important: true, key: randomUUID()},
        {label: 'That is so good!', important: false, key: randomUUID()},
        {label: 'I don\'t need a break.', important: false, key: randomUUID()},
        "break the app"
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>

            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;
