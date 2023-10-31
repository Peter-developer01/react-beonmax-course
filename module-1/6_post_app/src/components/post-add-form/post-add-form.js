
import React, { Component } from 'react'

import '../../css/post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }

        this.onInput = this.onInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInput(label) {
        this.setState({
            label
        })
    }

    onSubmit(event, label) {
        event.preventDefault()
        this.props.onAdd(label)
        this.setState(() => ({
            label: ''
        }))
    }

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={(event) => this.onSubmit(event, this.state.label)}>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    value={this.state.label}
                    className="form-control new-post-label"
                    onInput={(e) => this.onInput(e.target.value)}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="submit">
                    Добавить
                </button>
            </form>
        )
    }
}
