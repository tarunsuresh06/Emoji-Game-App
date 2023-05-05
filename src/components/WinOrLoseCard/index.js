import './index.css'

const WinOrLosecard = props => {
  const {score, triggerPlayAgain} = props

  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameStatus = score === 12 ? 'Won' : 'Lose'

  const onClickPlayAgain = () => {
    triggerPlayAgain()
  }

  return (
    <div className="win-or-lose-card">
      <div className="win-or-lose-card-content">
        <h1 className="win-or-lose-card-title">You {gameStatus}</h1>

        <p className="best-score-heading">Best Score</p>
        <p className="best-score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img className="win-lose-img" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLosecard
