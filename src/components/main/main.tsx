import { useState } from "react"
import { todoMocks } from "../../mocks/todoMocks"
import { todoType } from "../../types/todoType"
import TodoForm from "../todoForm/todoForm";
import styles from './main.module.scss'

export default function Main() {
    const [todos, setTodos] = useState<todoType[]>(todoMocks);

    const addTodo = (todo: string) => {
        setTodos([
            ...todos,
            {id: '2', content: todo, isDone: false}
        ])
    }

    return(
        <main className={styles.main}>
            <TodoForm addTodo={addTodo}/>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <p>{todo.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>Паналь управления</div>
        </main>
    )
}