import {Link} from 'react-router-dom';
import './navStyle.css';
 const Nav = () => {
    return (
        
        <div>
             <nav>
          <ul className="items">
            <li>
              <Link to="/" className="link1">Home</Link>
              </li>
              <li>
              <Link to="/profile"  className="link1">Profile</Link>
            </li>
            <li>
              <Link to="/about"  className="link1">About</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
export default Nav;