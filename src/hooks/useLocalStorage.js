import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            return saved !== null ? JSON.parse(saved) : initialValue;
        } catch (error) {
             console.error("Error reading ", error)
             return initialValue; 
        }
    });
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
        console.error("Error saving to localStorage:", error);
        }
    }, [key, value]);

     return [value, setValue];

}

export default useLocalStorage;