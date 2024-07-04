import { useEffect, useState } from "react";

type Keys = {
  isAuth: boolean;
};

class Storage {
  constructor(private webStorage: globalThis.Storage) {}
  setItem<K extends keyof Keys>(key: K, value: Keys[K]) {
    const val = JSON.stringify(value);
    this.webStorage.setItem(key, val);

    window.dispatchEvent(new Event("storage"));
  }

  getItem<K extends keyof Keys>(key: K) {
    const item = this.webStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item) as Keys[K];
  }

  removeItem<K extends keyof Keys>(key: K) {
    this.webStorage.removeItem(key);
    window.dispatchEvent(new Event("storage"));
  }
}

export const storage = new Storage(window.localStorage);

export const useSubscribeToStorageChanges = (key: keyof Keys) => {
  const [value, setValue] = useState<Keys[typeof key] | null>(
    storage.getItem(key)
  );

  useEffect(() => {
    const setValueHanlder = () => {
      setValue(storage.getItem(key));
    };

    window.addEventListener("storage", setValueHanlder, false);

    return () => {
      window.addEventListener("storage", setValueHanlder, false);
    };
  }, [key]);

  return value;
};
