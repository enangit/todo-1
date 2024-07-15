import React from "react";
import Dots from "./Dots";
import Button from "./Button";
import "./Container.css";
import Tasks from "./Tasks";
import Form from "./Form";

function Container() {

    function handleClick() {
        console.log("clicked")
    }

    function handleLogin() {
        console.log("login clicked")
    }

    function handleRegister() {
        console.log("register clicked")
    }

    return (
        <section className="container">
            <header className="container__header">
                <Dots />
                <Button onClick={handleClick} > 0 / 3 completed</Button>
            </header>
            <div className="container__tasks">
                <Tasks />
            </div>
            <div className="container__form">
                <Form />
                <div className="actions">
                    <Button onClick={handleLogin}>Login </Button>
                    <Button onClick={handleRegister}>Register</Button>
                </div>
            </div>
        </section>
    )
}

export default Container
