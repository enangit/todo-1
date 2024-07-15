import "./App.css";
import Container from "./components/Container";
import GlobalContextProvider from "./utils/GlobalContextProvider";
import { useEffect, useState } from "react";

function App() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

    useEffect(() => {
        if (!todos) return;
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            <GlobalContextProvider value={{ todos, setTodos }}>
                <Container />
            </GlobalContextProvider>
        </>
    )
}

export default App
