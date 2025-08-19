import "../styles/StartScreen.css"

function StartScreen({ handleClick, currentScreen }) {
  return (
    <div className={`start-screen ${currentScreen ? '' : 'hidden'}`}>
        <div className="game-title">Memory Cards</div>
        <button 
          className="start-button"
          onClick={handleClick}
          type="button"
        >
          START
        </button>
    </div>
  )
}

export default StartScreen