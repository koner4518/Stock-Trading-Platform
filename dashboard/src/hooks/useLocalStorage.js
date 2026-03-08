import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? storedValue : initialValue;

    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, newValue);
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setStoredValue];
}