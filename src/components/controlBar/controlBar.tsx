import { todoType } from "../../types/todoType";
import { filters } from "../../utils/const";
import { plural } from "../../utils/plural"
import styles from './controlBar.module.scss'

type Props = {
    todos: todoType[];
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

export default function ControlBar({todos, changeFilter}: Props) {
    const itemCountText = getItemsCoutText(todos.length)

    return(
        <div className={styles.controlBar}>
            <p className={styles.counter}>{itemCountText}</p>
            <ul className={styles.filters}>
                {filters.map(
                    filter => 
                        <li key={filter}>
                            <button onClick={() => changeFilter(filter)}>{filter}</button>
                        </li>
                )}
            </ul>
            <div>Delete done todo</div>
        </div>
    )
}