import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </div>
  );
}
