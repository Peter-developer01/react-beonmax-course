import React from 'react'

import PostListItem from '../post-list-item'

import '../../css/post-list.css'

const PostList = ({posts}) => {
    let elements = posts.filter((post) => (typeof post === 'object' && post.key && post.label))
    elements = elements.map((post) => {
        const {key, ...postProps} = post

        return (
            <li key={key} className="list-group-item">
                <PostListItem {...postProps} />
            </li>
        )
    })

    return (
        <ul className="post-list list-group">
            {elements}
        </ul>
    )
}

export default PostList