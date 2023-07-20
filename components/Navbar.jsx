const React = require("react");

module.exports = function Navbar({ userName }) {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="/" className="brand-logo">
          JIVOY DOM
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {userName ? (
            <>
              <li>
                <a href="gi">Categories</a>
              </li>
              <li className="logout">
                <a href="#">LogOut</a>
              </li>
              <li className="logout">
                <a href="#">{userName}</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">LogIn</a>
              </li>
              <li>
                <a href="/auth/reg">Registration</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
