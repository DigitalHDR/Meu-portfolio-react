import {useEffect, useState} from 'react'

export default function useDarkMode() {
  const [darkMode, setDarkMode]= useState(localStorage.getItem('theme') === 'dark' ? true : false)

  useEffect(() => {
    if(darkMode) {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return [darkMode, toggleDarkMode]
}