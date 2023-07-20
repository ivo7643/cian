const React = require("react");
const Navbar = require("./Navbar");
const Footer = require("./Footer");

module.exports = function Layout({ title, children, userName }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script defer src="/js/authScripts.js"/>
      </head>
      <body>
        <Navbar userName={userName} />
        {children}
        <Footer />
      </body>
    </html>
  );
};
