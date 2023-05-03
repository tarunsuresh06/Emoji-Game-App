import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props

  const {emojiName, emojiUrl} = emojiDetails

  return (
    <li className="emoji-card">
      <img src={emojiUrl} className="emoji-image" alt={emojiName} />
    </li>
  )
}

export default EmojiCard
