import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

function useStorage(key, defaultValue, storageObj) {
  const [value, setValue] = useState(() => {
    const jsonString = storageObj.getItem(key);
    if (jsonString != null) {
      return JSON.parse(jsonString);
    }
    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObj.removeItem(key);
    storageObj.setItem(key, JSON.stringify(value));
  }, [key, value, storageObj]);

  const remove = () => {
    setValue(undefined);
  };

  return [value, setValue, remove];
}
