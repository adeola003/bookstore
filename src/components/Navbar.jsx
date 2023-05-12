import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore</h1>
    <div className="links-container">
      <a className="links BOOKS" href="/">Books</a>
      <a className="links CATEGORIES" href="/categories">Categories</a>
    </div>
    <div><FontAwesomeIcon icon={faUser} /></div>
  </nav>
);

export default Navbar;
