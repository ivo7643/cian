const React = require("react");
const Layout = require("./Layout");
const Filter = require("./Filter");

module.exports = function Main({ title, userLogin, categories }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <Filter categories={categories} />
      <div className="main"></div>
    </Layout>
  );
};
