import '../styles/CharacterCard.css'

function CharacterCard({ characterName, characterImageURL}) {
  return (
    <div className='character-card'>
      <div className='char-image-container'>
        <img src={characterImageURL} alt={`${characterName} from Rick and Morty`} />
      </div>
      <p>{characterName}</p>
    </div>
  )
}

export default CharacterCard