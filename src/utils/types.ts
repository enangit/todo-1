import React from "react";

export interface Todo {
    id: string,
    task: string,
    isCompleted: boolean
}

export interface ContextType {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
}
