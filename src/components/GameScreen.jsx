import { useEffect, useState } from 'react'
import '../styles/GameScreen.css'
import { generateRandomNumberArray } from '../utils/helper';
import CharacterCard from './CharacterCard';

const apiURL = 'https://rickandmortyapi.com/api';
// character count in data base
const MAX = 826;

function GameScreen({ currentScreen, cardCount }) {

  const [characterIds, setCharacterIds] = useState(generateRandomNumberArray(cardCount, MAX))

  const [characterData, setCharacterData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const [currentScore, setCurrentScore] = useState(0)
  const [personalBest, setPersonalBest] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}/character/${characterIds}`);
        if (!response.ok) { throw new Error('Failed to fetch Data') }
        const data = await response.json();
        setCharacterData(data);
        console.log(data)
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [characterIds])

  if (isLoading) return (<p>Loading character cards...</p>)
  if (errorMessage) return (<p>An Error has occured: {errorMessage}</p>)

  return (
    <div className={`game-screen ${currentScreen ? '' : 'hidden'}`}>
      <div className="game-details">
        <h1>Click {cardCount} unique cards to win!</h1>
        <div className='scores'>
          <p>Current Score: {currentScore}</p>
          <p>Personal Best: {personalBest}</p>
        </div>
      </div>
      <div className="card-container">
        {characterData.map((character) => (
          <CharacterCard 
            key={character.id}
            characterName={character.name}
            characterImageURL={character.image}
          />
        ))}
      </div>
    </div>
  )
}

export default GameScreen