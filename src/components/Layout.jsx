import "../styles/Layout.css"
import { useState } from "react"
import StartScreen from "./StartScreen"
import DifficultyScreen from "./DifficultyScreen"

function Layout() {

  const screens = ['start', 'difficulty', 'game']
  const [currentScreen, setCurrentScreen] = useState(0)

  const handleStart = () => {
    setCurrentScreen(currentScreen + 1)
  }

  const [cardCount, setCardCount] = useState(0)

  return (
    <>
      <StartScreen 
        handleClick={handleStart}
        currentScreen={screens[currentScreen] === 'start'}
      />
      <DifficultyScreen
        handleClick={handleStart} 
        currentScreen={screens[currentScreen] === 'difficulty'}
      />
    </>
  )
}

export default Layout