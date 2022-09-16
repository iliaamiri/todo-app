import {useState} from "react";
import {TodoItem} from "../models/TodoItem";

type ReturnParams = [
    storedValue: any,
    setValue: (value: any) => void
];

function useLocalStorage(key: string, initialValue: TodoItem[]): ReturnParams {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<TodoItem[]>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) as TodoItem[] : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: (prevTodoItems: TodoItem[]) => TodoItem[]) => {
        try {
            // Save state
            setStoredValue(value);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}
export default useLocalStorage;