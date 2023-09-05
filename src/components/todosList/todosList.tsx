import { todoType } from "../../types/todoType"
import styles from './todosList.module.scss'


type Props = {
    todos: todoType[];
    toggleIsDone: (id: string) => void;
    deleteTodo: (id: string) => void;
    activeFilter: string;
}

const getFiltredTodos = (todos: todoType[], filter: string) => {
    const filtredTodo = [...todos];

    switch(filter) {
        case 'active':
            return filtredTodo.filter(todo => todo.isComplete === false)
        case 'completed': 
            return filtredTodo.filter(todo => todo.isComplete === true)   
        case 'all': 
            return todos 
    }
}

export default function TodosList({todos, toggleIsDone, deleteTodo, activeFilter}: Props) {
    const filtredTodos = getFiltredTodos(todos, activeFilter);
    
    if (filtredTodos?.length === 0) {
        return(
            <h3 className={styles.emptyPlug}>Make some tasks for you today!</h3>
        ) 
    }

    return(
        <ul 
            className={styles.todosList}
        >
            {
                filtredTodos 
                    ? 
                        filtredTodos.map((todo) => (
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
                        ))
                    :  
                        <div> You have no tasks!</div>
            }
        </ul>

    )
}