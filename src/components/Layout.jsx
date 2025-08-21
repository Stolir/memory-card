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

  if (screens[currentScreen] === 'start') {
    return (
      <StartScreen 
        handleClick={handleStart}
      />
    )
  }

  if (screens[currentScreen] === 'difficulty') {
    return (
      <DifficultyScreen
        handleStart={handleStart}
        handleSetDifficulty={setCardCount}
      />
    )
  }

  if (screens[currentScreen] === 'game') {
    return (
      <GameScreen 
        cardCount={cardCount}
        handleScreenSelection={setCurrentScreen}
      />
    )
  }
}

export default Layout