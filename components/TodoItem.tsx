import {TodoItem as TodoItemModel} from "../models/TodoItem";
import styles from '../styles/Home.module.css'


type TodoItemProps = {
    todoItem: TodoItemModel,

    onRemove: (todoItemId: number) => void,
    onComplete: (todoItemId: number) => void,
};

export default function TodoItem({todoItem, onComplete, onRemove}: TodoItemProps) {
    return (
        <div className={styles.todoItem}>
            <h2 style={{
                padding: 10
            }}>{todoItem.title}</h2>
            <div>
                <a href="#" className={styles.button} onClick={(event) => {
                    event.preventDefault();
                    if (todoItem.completed)
                        return;
                    onComplete(todoItem.id);
                }} style={{
                    opacity: todoItem.completed ? 0.5 : 1
                }}>
                    <span>Complete</span>
                </a>
                <a href="#" className={styles.button} onClick={(event) => {
                    event.preventDefault();
                    onRemove(todoItem.id);
                }}>
                    <span>Delete</span>
                </a>
            </div>
        </div>
    );
}