import './Navbar.css'
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <h2>Blinkit</h2>

      {/* Search */}
      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search Products"
        />
      </div>

      {/* Login */}
      <button className="nav-button">
        Login
      </button>

      {/* Cart */}
      <button className="nav-button">
        <FaShoppingCart size={15} />
        <span>Cart</span>
      </button>

      {/* Profile */}
      <button className="nav-button">
        <FaUser size={15} />
        <span>Profile</span>
      </button>

    </nav>
  )
}

export default Navbar