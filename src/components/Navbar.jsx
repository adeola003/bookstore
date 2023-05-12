import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-elements">
      <h1>Bookstore ADE</h1>
      <div className="links-container">
        <a className="links BOOKS" href="/">Books</a>
        <a className="links CATEGORIES" href="/categories">Categories</a>
      </div>
      <div className="faUser"><FontAwesomeIcon icon={faUser} /></div>
    </div>
  </nav>
);

export default Navbar;
