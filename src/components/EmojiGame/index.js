import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props

    return (
      <>
        <NavBar />
        <div className="app-container">
          <ul className="emoji-container">
            {emojisList.map(emojiDetails => (
              <EmojiCard key={emojiDetails.id} emojiDetails={emojiDetails} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default EmojiGame
