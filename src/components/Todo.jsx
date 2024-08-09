import React from "react";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
    return (
        <>

            <div className="task">

                <div className="texts_del_chan">

                    <div className="fir_blc">

                        <h5 onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</h5>

                        <span onClick={() => deleteTodo(task.id)}>&times;</span>

                    </div>

                    <div className="sec_blc">

                        <small>{task.time}</small>

                        <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/edit-change-pencil-12.png" alt="" onClick={() => editTodo(task.id)} />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Todo;