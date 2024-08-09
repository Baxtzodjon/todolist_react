import React, { useState } from "react";

function TodoForm({addTodo}) {

    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        addTodo(value)

        setValue("")
    }

    return (
        <>

            <form action="" className="todo_form" onSubmit={handleSubmit}>

                <input type="text" className="todo_input" name="fName" value={value} placeholder="Buy Model S" onChange={(e) => setValue(e.target.value)} />

                <button type="submit" className="todo_btn">Add</button>

            </form>

            <div className="line_bottom">

                <div className="line"></div>

            </div>

        </>
    )
}

export default TodoForm;