import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const DarkMode = (key) => {
  const [dark, setDark] = useLocalStorage(key);

  useEffect(() => {
    const body = document.querySelector("body");
    if (dark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [dark]);

  return [dark, setDark];
};

export default DarkMode;
