const React = require("react");
const Navbar = require("./Navbar");
const Footer = require("./Footer");


module.exports = function Layout({ title, children, userLogin,userStat }) {
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
        <link rel="stylesheet" href='/css/style.css'/>
        <script defer src="/js/authScripts.js"/>
        <script defer src="/js/apartmentsScript.js"/>
        <script defer src="/js/favoriteScript.js"/>
      </head>
      <body>
        <Navbar userLogin={userLogin} userStat={userStat}/>
        {children}
        <Footer />
      </body>
    </html>
  );
};
