import { GlobalContext } from "../utils/GlobalContextProvider";
import Button from "./Button";
import { useContext } from "react";
import "./Tasks.css";

function Tasks() {
    const { todos, setTodos } = useContext(GlobalContext);

    function handleDeleteTask(id: string, e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
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
        <ul className="tasks">
            {Array.from(todos).length > 0 ? (
                Array.from(todos).map((task) => {

                    return (
                        <li
                            className="task"
                            key={task.id}
                            onClick={() => handleComplete(task.id)}
                        >

                            <p
                                className={task.isCompleted ? "completed" : null}
                            >
                                {task.task}
                            </p>

                            <Button
                                onClick={(e) => handleDeleteTask(task.id, e)}
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
