"use client"

import { FC, useEffect, useState } from "react"
import { HiSun, HiMoon } from "react-icons/hi"

interface DarkModeToggleProps {
    topRight?: boolean
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ topRight }) => {
    const [theme, setTheme] = useState<"dark" | "light">("light")

    const getPrefersDarkMode = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            document.documentElement.classList.remove("dark")
        }
    }

    const toggleDarkMode = () => {
        if (localStorage.theme === "dark") {
            setTheme("light")
            localStorage.theme = "light"
        } else {
            setTheme("dark")
            localStorage.theme = "dark"
        }
        getPrefersDarkMode()
    }

    useEffect(() => {
        getPrefersDarkMode()
    }, [])

    return (
        <button
            className={`${
                topRight && "fixed  top-20 right-4"
            } rounded-full bg-gray-200 dark:bg-gray-800 p-2 z-30`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
        >
            {theme === "dark" ? (
                <HiSun className="text-gray-800 dark:text-gray-200" />
            ) : (
                <HiMoon className="text-gray-800 dark:text-gray-200" />
            )}
        </button>
    )
}

export default DarkModeToggle
