import { FormEvent, useState } from "react";
import styles from './todoForm.module.scss'

type Props = {
    addTodo: (todo: string) => void;
}

export default function TodoForm({addTodo}: Props) {
    const [value, setValue] = useState('')

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        addTodo(value);
        setValue('');
    }

    return(
        <form 
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
                placeholder='What need to be done?'
            /> 
        </form>
    )
}