import "../styles/StartScreen.css"

function StartScreen({ handleClick }) {
  return (
    <div className={`start-screen`}>
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