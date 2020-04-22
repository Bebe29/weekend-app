import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
  loginHandler
} from "../../redux/actions";

class TodoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Todo Screen</h1>
        {/* <h2>{this.props.todo.todoInput}</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Input Todo Item"
          //   onChange={e => this.props.todoInputHandler(e.target.value)}
          onChange={e => this.props.onChangeTodo(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Input Username"
          onChange={e => this.props.onChangeUsername(e.target.value)}
        /> */}
        {/* <input
          type="text"
          className="form-control"
          placeholder="Input Todo Item"
          onChange={e => this.props.onChangeTodo(e.target.value)}
        />
        <input
          type="button"
          className="btn btn-primary"
          value="Add Todo"
          onClick={() => this.props.onAddTodo(this.props.todo.todoInput)}
        />
        {this.props.todo.todoList.map(val => {
          return <p>{val}</p>;
        })} */}
        <p>Testing 1: {this.props.user.testing}</p>
        <p>Testing 2: {this.props.user.testing2}</p>
        <input
          type="button"
          value="Testing 1"
          className="btn btn-success"
          onClick={this.props.onLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    user: state.user
  };
};

const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
  onAddTodo: addTodoHandler,
  onLogin: loginHandler
};

// export default TodoReduxScreen;
// export default connect(mapStateToProps, { todoInputHandler })(TodoReduxScreen);
export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
