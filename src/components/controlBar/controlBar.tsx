import { todoType } from "../../types/todoType";
import { filters } from "../../utils/const";
import { plural } from "../../utils/plural"
import styles from './controlBar.module.scss'

type Props = {
    todos: todoType[];
    activeFilter: string;
    changeFilter: (filter: string) => void;
}

function getItemsCoutText(count: number) {
    const pluralRules = plural.select(count);
    switch(pluralRules) {
        case 'one': 
            return `${count} item left`
        default:
            return `${count} items left`
    }
}

export default function ControlBar({todos, activeFilter, changeFilter}: Props) {
    const leftTodos = todos.filter(todo => todo.isComplete === false);
    const itemCountText = getItemsCoutText(leftTodos.length);

    return(
        <div className={styles.controlBar}>
            <p className={styles.counter}>{itemCountText}</p>
            <ul className={styles.filters}>
                {filters.map(
                    filter => 
                        <li 
                            className={`${activeFilter === filter ? styles.filterActive : null}`}
                            key={filter}
                        >
                            <button 
                                className={styles.button}
                                onClick={() => changeFilter(filter)}>{filter}</button>
                        </li>
                )}
            </ul>
            <div>Delete done todo</div>
        </div>
    )
}