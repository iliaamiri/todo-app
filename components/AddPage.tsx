import styles from "../styles/Home.module.css";
import {Dispatch, SetStateAction, useState} from "react";
import {TodoItem} from "../models/TodoItem";

type AddPageProps = {
    setAddPageMode: Dispatch<SetStateAction<boolean>>,

    onAddSubmit: (todoText: string) => void
};

export default function AddPage({setAddPageMode, onAddSubmit}: AddPageProps) {
    const [text, setText] = useState<string>('');

    return (
        <>
            <a href="#" className={styles.card} onClick={(event) => {
                event.preventDefault();
                setAddPageMode(false);
            }}>
                <p>Back</p>
            </a>
            <form>
                <label>Todo text:</label>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
                <button onClick={(event) => { event.preventDefault(); onAddSubmit(text);}}>Add Todo</button>
            </form>
        </>
    );
}