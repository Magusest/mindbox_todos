import { useEffect, useState } from "react"
import { todoMocks } from "../../mocks/todoMocks"
import { todoType } from "../../types/todoType"
import TodoForm from "../todoForm/todoForm";
import TodosList from "../todosList/todosList";
import { nanoid } from 'nanoid'
import styles from './main.module.scss'
import ControlBar from "../controlBar/controlBar";
import { filters } from "../../utils/const";

export default function Main() {
    const [todos, setTodos] = useState<todoType[]>(todoMocks);
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    useEffect(()=> {}, [activeFilter])

    const addTodo = (todo: string) => {
        setTodos([
            ...todos,
            {id: nanoid(), content: todo, isComplete: false}
        ])
    };

    const deleteTodo = (id: string) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    };

    const toggleIsDone = (id: string) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo  
            )
        )
    };

    const changeFilter = (filter: string, ) => {
        setActiveFilter(filter)
    }

    const deleteCompleted = () => {
        setTodos(
            todos.filter(todo => todo.isComplete !== true)
        )
    }

    return(
        <main className={styles.main}>
            <TodoForm 
                addTodo={addTodo}
            />
            <TodosList 
                todos={todos} 
                toggleIsDone={toggleIsDone} 
                deleteTodo={deleteTodo} 
                activeFilter={activeFilter}
            /> 
            <ControlBar 
                todos={todos}
                activeFilter={activeFilter}
                changeFilter={changeFilter}
                deleteCompleted={deleteCompleted}
            />
        </main>
    )
}