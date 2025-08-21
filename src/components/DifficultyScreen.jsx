import DifficultyCard from "./DifficultyCard"
import "../styles/DifficultyScreen.css"

function DifficultyScreen({ handleStart, handleSetDifficulty }) {

  const difficulties = [
    {
      id: 0,
      name: 'What are we talking about?',
      cardCount: 4,
    },
    {
      id: 1,
      name: 'I got this... I think?',
      cardCount: 8,
    },
    {
      id: 2,
      name: 'I will be fine.',
      cardCount: 12,
    },
  ]

  const handleClick = (cardCount) => {
    handleStart()
    handleSetDifficulty(cardCount)
  }

  return (
    <div className={`difficulty-screen`}>
      <h1>How good is your memory?</h1>
      <div className="difficulty-cards">
        {difficulties.map(difficulty => (
          <DifficultyCard 
          key={difficulty.id} 
          handleClick={() => {
            handleClick(difficulty.cardCount)
          }}>
            {difficulty.name}
          </DifficultyCard>
        ))}
      </div>
    </div>
  )
}

export default DifficultyScreen