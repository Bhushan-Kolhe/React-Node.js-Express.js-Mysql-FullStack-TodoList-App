import React, { Component } from 'react';
import ReactDOM from "react-dom";

export class AddTodo extends Component {

    state = {
        Value: ""
    }

    onChange = (e) => this.setState({Value: e.target.value});
    onSubmitTodo = (e) => {
        if(this.state.Value == "") return;
        this.props.addTodo(this.state.Value);
        this.setState({Value: ""});
        const node = ReactDOM.findDOMNode(this);
        node.childNodes[0].value = '';
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
