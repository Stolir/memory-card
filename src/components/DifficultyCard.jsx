import '../styles/DifficultyCard.css'

function DifficultyCard({ children, handleClick}) {
  return (
    <button className="difficulty-card" onClick={handleClick}>
      <p>{children}</p>
    </button>
  )
}

export default DifficultyCard