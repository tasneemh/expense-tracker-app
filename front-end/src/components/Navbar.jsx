import React from 'react';

const Navbar = (props) => {
  const {loggedIn} = props;
  return (
    <nav className="navbar">
    {!loggedIn ? (<ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>) : (<ul>
        <li><a href="/">Logout</a></li>
      </ul>) }
      
    </nav>
  )
}

export default Navbar;
