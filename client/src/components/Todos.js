import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import uuid from 'uuid';
import axios from 'axios';

export class Todos extends Component {

    state = {
        todos: [],
        count: 0
    }


    DeleteTodo = (id) => {
        //this.setState( { todos: [...this.state.todos.filter(todo => todo.id != id)] })
        axios.get(`/DeleteTodo?id=${id}`).then(res => console.log(res)).then(() => {
            this.getTodos();
        });
    }

    addTodo = (Val) => {
        
        axios.get(`/AddTodo?todo='${Val}'&title='${this.props.todoTitles.Title}'`).then(res => console.log(res))
        .then(() => {
            this.getTodos();
        });
    }

    componentDidMount(){
        this.getTodos();
    }
    
    getTodos() {
        axios.get(`/GetTodos?title='${this.props.todoTitles.Title}'`)
        .then(res => this.setState({ todos: res.data.data, count: res.data.data.length}))
        .then(() =>{
            if(this.state.count == 0)
                this.props.getTitles();
        });
    }

    render() {
        const TodoListStyle = {
            width: '45vh'
        };

        var todoItemList = this.state.todos.map((todo) => (
            <TodoItem key={todo.ID} todo={todo}  DeleteTodo={this.DeleteTodo} />
        ));
        return (
            <div className="card border-dark mb-3" style={TodoListStyle}>
            <div className="card-header">
                <h4>{this.props.todoTitles.Title}</h4>
            </div>
            <div className="card-body">
                <AddTodo addTodo={this.addTodo} />
                <div className="card-text">{todoItemList}</div>
            </div>
            </div>
        );
    }
}


export default Todos;
