import './index.css'

const NavBar = props => {
  console.log(props)

  return (
    <nav className="navbar">
      <div className="nav-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-image"
          alt="nav"
        />
        <h1 className="nav-title">Emoji Game</h1>
      </div>

      <div className="nav-card">
        <p className="nav-item-name">Score: 0</p>
        <p className="nav-item-name">Top Score: 0</p>
      </div>
    </nav>
  )
}

export default NavBar
