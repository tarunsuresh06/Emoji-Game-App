import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  const renderNavItem = () => (
    <div className="nav-card">
      <p className="nav-item-name">Score: {score}</p>
      <p className="nav-item-name">Top Score: {topScore}</p>
    </div>
  )

  return (
    <nav className="navbar">
      <div className="nav-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-image"
          alt="emoji logo"
        />
        <h1 className="nav-title">Emoji Game</h1>
      </div>

      {!isGameOver && renderNavItem()}
    </nav>
  )
}

export default NavBar
