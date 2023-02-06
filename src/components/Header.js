import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Kamen Ivanov - Portfolio</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  )
}

export default Header;
