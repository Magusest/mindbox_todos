import { todoType } from "../types/todoType";
import { nanoid } from 'nanoid'

const todoMocks: todoType[] = [
    {
        id: nanoid(),
        content: 'Write all functions',
        isComplete: false,
    },
]

export {
    todoMocks,
}