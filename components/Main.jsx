const React = require("react");
const Layout = require("./Layout");
const Navbar = require("./Navbar");
const Footer = require("./Footer");

module.exports = function Main({ title, userName }) {
  return (
    <Layout title={title} userName={userName}>
      <div className="main"></div>
    
    </Layout>
  );
};
