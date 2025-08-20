import "../styles/Layout.css"
import { useState } from "react"
import StartScreen from "./StartScreen"
import DifficultyScreen from "./DifficultyScreen"
import GameScreen from "./GameScreen"

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
        handleStart={handleStart}
        handleSetDifficulty={setCardCount}
        currentScreen={screens[currentScreen] === 'difficulty'}
      />
      <GameScreen 

      />
    </>
  )
}

export default Layout