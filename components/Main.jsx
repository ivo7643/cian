const React = require("react");
const Layout = require("./Layout");
const Filter = require("./Filter");

module.exports = function Main({ title, userName, categories }) {
  return (
    <Layout title={title} userName={userName}>
      <Filter categories={categories} />
      <div className="main"></div>
    </Layout>
  );
};
