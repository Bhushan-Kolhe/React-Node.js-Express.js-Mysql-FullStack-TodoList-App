import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        Value: ""
    }

    onChange = (e) => this.setState({Value: e.target.value});
    onSubmitTodo = (e) => {
        this.props.addTodo(this.state.Value);
        this.setState({Value: ""});
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="asd" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" onClick={this.onSubmitTodo}>Submit</button>
                </div>
            </div>
        )
    }
}

export default AddTodo
