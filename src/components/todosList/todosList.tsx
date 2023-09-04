import { todoType } from "../../types/todoType"
import styles from './todosList.module.scss'


type Props = {
    todos: todoType[];
    toggleIsDone: (id: string) => void;
    deleteTodo: (id: string) => void;
    activeFilter: string;
}

const getFiltredTodos = (todos: todoType[], filter: string) => {
    switch(filter) {
        case 'active':
            return todos.filter(todo => todo.isComplete === false)
        case 'completed': 
            return todos.filter(todo => todo.isComplete === true)   
        default:
            return todos
    }
}

export default function TodosList({todos, toggleIsDone, deleteTodo, activeFilter}: Props) {
    getFiltredTodos(todos, activeFilter);

    return(
        <ul 
            className={styles.todosList}
        >
            {todos.map((todo) => (
                <li 
                    key={todo.id}
                >
                    <div 
                        className={`${styles.todoItem} ${todo.isComplete ? styles.doneTodoItem : null}`}
                    >
                        <div 
                            className={styles.customCheckbox}
                            onClick={() => toggleIsDone(todo.id)}
                        ></div>
                        <p>{todo.content}</p>
                        <div 
                            className={styles.deleteButton}
                            onClick={() => deleteTodo(todo.id)}
                        ></div>
                    </div>
                </li>
            ))}
        </ul>

    )
}