import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLosecard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojisClicked: [], isGameOver: false}

  onAddToEmojisList = id => {
    const {emojisClicked} = this.state

    if (!emojisClicked.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojisClicked: [...prevState.emojisClicked, id],
      }))

      const {score} = this.state

      if (score === 11) {
        this.setState({isGameOver: true, topScore: 12})
      }
    } else {
      const {score, topScore} = this.state

      const setTopScore = score > topScore ? score : topScore

      this.setState({
        isGameOver: true,
        topScore: setTopScore,
        emojisClicked: [],
      })
    }
  }

  renderEmojisList = () => {
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="emoji-container">
        {emojisList.map(emojiDetails => (
          <EmojiCard
            key={emojiDetails.id}
            emojiDetails={emojiDetails}
            onAddToEmojisList={this.onAddToEmojisList}
          />
        ))}
      </ul>
    )
  }

  triggerPlayAgain = () => {
    this.setState({isGameOver: false, score: 0})
  }

  render() {
    const {score, topScore, isGameOver} = this.state

    return (
      <>
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="app-container">
          {isGameOver ? (
            <WinOrLosecard
              score={score}
              triggerPlayAgain={this.triggerPlayAgain}
            />
          ) : (
            this.renderEmojisList()
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
