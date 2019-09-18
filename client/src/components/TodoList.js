import React, { Component } from 'react'

export class TodoList extends Component {

    state = {
        Title: "",
        Todo: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    onSubmitTodoList = (e) => {
        if(this.state.Title == "" || this.state.Todo=="") return;
        this.props.addTodoList(this.state.Title,this.state.Todo);
        this.setState({
            Title: "",
            Todo: ""
        });
    }

    render() {
        const TodoListStyle = {
            width: '49vh'
        };

        return (
            <div style={TodoListStyle}>
                <div className="card text-white bg-danger" >
                    <div className="card-header">
                        Add Todo List
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Title </span>
                            </div>
                            <input type="text" className="form-control" maxLength="50" name="Title" placeholder="List Title..." value={this.state.Title} onChange={this.onChange} />
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name="Todo" placeholder="Add Todo..." value={this.state.Todo} onChange={this.onChange} />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit" onClick={this.onSubmitTodoList}>Submit</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList
