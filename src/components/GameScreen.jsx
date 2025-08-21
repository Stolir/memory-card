import { useEffect, useState } from 'react'
import '../styles/GameScreen.css'
import { generateRandomNumberArray, shuffleArray } from '../utils/helper';
import CharacterCard from './CharacterCard';

const apiURL = 'https://rickandmortyapi.com/api';
// character count in data base
const MAX = 826;

function GameScreen({ cardCount, handleScreenSelection }) {

  const [characterIds, setCharacterIds] = useState(generateRandomNumberArray(cardCount, MAX))

  const [characterData, setCharacterData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const [clickedCharacters, setClickedCharacters] = useState([])
  const [personalBest, setPersonalBest] = useState(0)

  const [gameStatus, setGameStatus] = useState({ gameOver: false, gameWon: false})

  const handleCharClick = (newChar) => {
    console.log([...clickedCharacters, newChar])
    if (clickedCharacters.includes(newChar)) {
      setGameStatus({gameOver: true, gameWon: false})
      personalBest < clickedCharacters.length && setPersonalBest(clickedCharacters.length)
    }
    if (clickedCharacters.length === cardCount - 1 && !clickedCharacters.includes(newChar)) {
      setGameStatus({gameOver: true, gameWon: true})
      personalBest < clickedCharacters.length + 1 && setPersonalBest(clickedCharacters.length + 1)
    } else {
      const newArray = shuffleArray(characterData)
      setCharacterData(newArray)
      setClickedCharacters(prev => [...prev, newChar])
    }
  }

  const handleRetry = (option) => {
    setGameStatus({gameOver: false, gameWon: false});
    setClickedCharacters([])
    if (option === 'retrySame') {
      handleScreenSelection(2);
      const newArray = shuffleArray(characterData)
      setCharacterData(newArray)
    }
    if (option === 'retryNew') {
      setIsLoading(true)
      setCharacterIds(generateRandomNumberArray(cardCount, MAX));
      handleScreenSelection(2);
    }
    if (option === 'difficulty') {
      handleScreenSelection(1);
    }
  }

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

  if (isLoading) return (<h1 className='status-message'>Loading...</h1>)
  if (errorMessage) return (<h1 className='status-message'>An Error has occured: {errorMessage}</h1>)
  if (gameStatus.gameOver) {
    return (
      <div className='game-over-screen'>
        <h1>{gameStatus.gameWon ? "You win!" : "You lost!"}</h1>
        <div className='controls'>
          <button onClick={() => {
            handleRetry('retrySame')
          }}>Retry with same characters</button>

          <button onClick={() => {
            handleRetry('retryNew')
          }}>Retry with new characters</button>

          <button onClick={() => {
            handleRetry('difficulty')
          }}>Select difficulty</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`game-screen`}>
      <div className="game-details">
        <h1>Click {cardCount} unique cards to win!</h1>
        <div className='scores'>
          <p>Current Score: {clickedCharacters.length}</p>
          <p>Personal Best: {personalBest}</p>
        </div>
      </div>
      <div className="card-container">
        {characterData.map((character) => (
          <CharacterCard 
            key={character.id}
            characterName={character.name}
            characterImageURL={character.image}
            handleClick={handleCharClick}
          />
        ))}
      </div>
    </div>
  )
}

export default GameScreen