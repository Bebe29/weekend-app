import React from "react";
import { connect } from "react-redux";
import { todoInputHandler, addTodoHandler } from "../../redux/actions/todo";
import { usernameInputHandler } from "../../redux/actions/user";

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
        <input
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
        })}
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
  onAddTodo: addTodoHandler
};

// export default TodoReduxScreen;
// export default connect(mapStateToProps, { todoInputHandler })(TodoReduxScreen);
export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
