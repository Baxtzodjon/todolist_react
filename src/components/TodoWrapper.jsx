import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

function TodoWrapper() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,
        {
            id: Math.random(),
            task: todo,
            time: new Date().toLocaleTimeString('uz-UZ', { hour12: false }),
            completed: false,
            isEditing: false
        }])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <>

            <h1 className="todo_text">Todo List</h1>

            <TodoForm addTodo={addTodo} />

            <div className="todos_blc">

                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} key={index} />
                    ) : (
                        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))}

            </div>

        </>
    )
}

export default TodoWrapper;