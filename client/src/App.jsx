import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import { useState } from "react"

function App() {
const [theme , setTheme] = useState('light')
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} dark:bg-black text-black dark:text-white`}>
      <Header theme={theme} setTheme ={setTheme} />
      <Outlet />
    </div>
  )
}

export default App
