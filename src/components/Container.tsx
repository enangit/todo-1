import React, { useContext } from "react";
import Dots from "./Dots";
import Button from "./Button";
import "./Container.css";
import Tasks from "./Tasks";
import Form from "./Form";
import { GlobalContext } from "../utils/GlobalContextProvider";

function Container() {
    const { todos } = useContext(GlobalContext);
    const numberOfCompletedTask = todos.filter(todo => todo.isCompleted).length.toString()
    const totalNumberOfTask = todos.length.toString();

    function handleClick() {
        console.log("clicked")
    }


    return (
        <section className="container">

            <h1 className="text-heading">todo app</h1>
            <header className="container__header">
                <Dots />
                <Button onClick={handleClick} > {numberOfCompletedTask} / {totalNumberOfTask} task completed</Button>
            </header>
            <div className="container__tasks">
                <Tasks />
            </div>
            <div className="container__form">
                <Form />
            </div>
        </section>
    )
}

export default Container
