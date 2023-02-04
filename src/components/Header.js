import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  )
}

export default Header;