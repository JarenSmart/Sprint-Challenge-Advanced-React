import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const DarkMode = (initialValue) => {
  const [value, setValue] = useLocalStorage("darkMode", initialValue);

  useEffect(() => {
    value === true
      ? document.body.classList.add("_dark-mode")
      : document.body.classList.remove("_dark-mode");
  }, [value]);

  return [value, setValue];
};

export default DarkMode;
