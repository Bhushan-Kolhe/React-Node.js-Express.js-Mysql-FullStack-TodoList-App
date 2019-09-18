import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    GetTextStyle = () => {
        return {
            margin: 'auto 0',
            width:'85%',
            maxWidth: '85%'
        }
    }

    GetStyle = () => {
        return {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            flexWrap:'nowrap',
            justifyContent:'space-between',
            flexGrow: '2',
            border: '1px solid #ddd',
            padding: '3px 5px',
            margin: '2px'
        }
    }


    render() {
        const {ID,Value} = this.props.todo;
        return (
            <div style={this.GetStyle()}>
                <span style={this.GetTextStyle()}>{this.props.todo.Value}</span>
                <button type="button" className="btn btn-light" onClick={this.props.DeleteTodo.bind(this, ID)}>X</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;