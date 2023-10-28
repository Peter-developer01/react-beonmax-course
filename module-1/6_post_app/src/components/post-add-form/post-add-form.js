import React from 'react'

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чём вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                className="btn btn-outline-secondary"
                type="submit">
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm