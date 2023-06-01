import { Link, NavLink } from "react-router-dom"

export const Nabvar = () => {
  return (
    <nav className="navbar container-fluid mb-3 navbar-expand-sm navbar-dark bg-dark rounded-2 justify-content-around">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>Navbar</Link>
      </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active' : ''}`} to='/' >
              Home
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active' : ''}`} to='about' >
              About
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active' : ''}`} to='login' >
              Login
            </NavLink>

          </ul>
        </div>
    </nav>
  )
}
