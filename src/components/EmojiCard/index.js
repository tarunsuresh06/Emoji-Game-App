import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onAddToEmojisList} = props

  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    onAddToEmojisList(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
