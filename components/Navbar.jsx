const React = require("react");

module.exports = function Navbar({ userLogin }) {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="/" className="brand-logo">
          JIVOY DOM
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {userLogin ? (
            <>
              <li>
                <a href="#">Categories</a>
              </li>
              <li className="logout">
                <a href="#">LogOut</a>
              </li>
              <li className="userLogin">
                <div>{userLogin}</div>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="/auth/log">LogIn</a>
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
