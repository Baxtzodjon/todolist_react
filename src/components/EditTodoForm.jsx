import React, { useState } from "react";

function EditTodoForm({editTodo, task}) {

    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()

        editTodo(value, task.id)

        setValue("")
    }

    return (
        <>

            <form action="" className="todo_form_change" onSubmit={handleSubmit}>

                <input type="text" className="todo_input" name="fName" value={value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)} />

                <button type="submit" className="todo_btn">Update</button>

            </form>

        </>
    )
}

export default EditTodoForm;