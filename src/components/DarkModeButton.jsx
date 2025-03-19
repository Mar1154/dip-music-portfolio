import { useState, useEffect } from "react";
import './styles/darkModeButton.css';

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="relative w-12 h-6 flex items-center">
        <input
            type="checkbox"
            id="theme-toggle"
            className="hidden"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
        />
        <label
            htmlFor="theme-toggle"
            className="cursor-pointer flex items-center w-full h-full p-1 bg-gray-300 dark:bg-gray-800 rounded-full transition"
        >
            <div className="w-4 h-4 bg-white dark:bg-yellow-400 rounded-full transform transition-transform duration-300 ease-in-out"
            style={{ transform: darkMode ? "translateX(100%)" : "translateX(0%)" }}
            ></div>
        </label>
        </div>
    );
};

export default DarkModeButton;
