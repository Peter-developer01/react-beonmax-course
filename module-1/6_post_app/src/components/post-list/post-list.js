import React from 'react'

import PostListItem from '../post-list-item'

import '../../css/post-list.css'

const PostList = () => {
    return (
        <ul className="post-list list-group">
            <PostListItem label="Going to learn React" />
            <PostListItem label="That is so good!" />
            <PostListItem label="I don't need a break" />
        </ul>
    )
}

export default PostList