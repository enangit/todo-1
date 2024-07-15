import { GlobalContext } from "../utils/GlobalContextProvider";
import Button from "./Button";
import { useContext } from "react";
import "./Tasks.css";

function Tasks() {
    const { todos, setTodos } = useContext(GlobalContext);

    function handleDeleteTask(id: string) {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    function handleComplete(id: string) {
        const newTodos = todos.filter(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        });

        setTodos(newTodos);
    }

    console.log("Tasks ", todos);

    return (
        <ul>
            {Array.from(todos).length > 0 ? (
                Array.from(todos).map((task) => {

                    return (
                        <li
                            key={task.id}
                        >

                            <p
                                className={task.isCompleted ? "completed" : null}
                                onClick={() => handleComplete(task.id)}
                            >
                                {task.task}
                            </p>

                            <Button
                                onClick={() => handleDeleteTask(task.id)}
                                className="button">
                                {"X"}
                            </Button>
                        </li>
                    )
                })) :
                (
                    <p> No Tasks Yet! </p>
                )
            }
        </ul>
    )
}

export default Tasks;
