import React, { Component } from 'react'

import '../../css/post-list-item.css'

export default class PostListItem extends Component {
    constructor(props) {
        super(props)
        this.onImportant = this.onImportant.bind(this)
        this.state = {
            important: props.important
        }
    }

    onImportant() {
        this.setState(({ important }) => ({
            important: !important
        }))
    }

    render() {
        const { label } = this.props
        const { important } = this.state
        let classNames = 'app-list-item d-flex justify-content-between';

        return (
            <div className={classNames + (important ? ' important' : '')}>
                <span className="app-list-item-label">
                    {label}
                </span>

                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>

                    <button
                        type="button"
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>

                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
