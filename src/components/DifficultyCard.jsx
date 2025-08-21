import '../styles/DifficultyCard.css'

function DifficultyCard({ children, handleClick}) {
  return (
    <button className="difficulty-card" onClick={handleClick}>
      {children}
    </button>
  )
}

export default DifficultyCard