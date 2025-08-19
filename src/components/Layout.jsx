import "../styles/Layout.css"
import { useState } from "react"
import StartScreen from "./StartScreen"

function Layout() {
  const [isStarted, setIsStarted] = useState(false)
  const handleStart = () => {
    console.log("clicked")
    setIsStarted(!isStarted)
  }

  return (
    <>
      <StartScreen 
        handleClick={handleStart}
        currentScreen={isStarted ? false : true}
      />
    </>
  )
}

export default Layout