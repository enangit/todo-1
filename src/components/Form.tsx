import { GlobalContext } from "../utils/GlobalContextProvider";
import { Todo } from "../utils/types";
import Button from "./Button";
import "./Form.css";

import { useContext, useRef } from "react";

function Form() {
    const submitter = useRef();
    const { setTodos } = useContext(GlobalContext);

    function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget, submitter.current);
        const task = formData.get("task");

        if (!task) {
            return
        }

        const newTask: Todo = {
            id: (Math.random() * 10).toString().slice(2),
            task: task.toString(),
            isCompleted: false
        }

        setTodos(prevState => {
            return [...prevState, newTask]
        })



        console.log(task);

        event.currentTarget.reset()
    }

    return (
        <form className="task-form" onSubmit={handleAddTask}>
            <div className="form-group">
                <label htmlFor="task">Task</label>
                <input type="text" id="task" name="task" className="task-input" />
            </div>
            <Button type="submit" ref={submitter}> Add Task </Button>
        </form>
    )
}

export default Form;
