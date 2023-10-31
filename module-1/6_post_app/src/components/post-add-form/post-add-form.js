import React from 'react'

import '../../css/post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={() => onAdd('Hello')}>
                Добавить
            </button>
        </div>
    )
}

export default PostAddForm