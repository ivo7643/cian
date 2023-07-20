const React = require("react");
const Layout = require("./Layout");
const Filter = require("./Filter");
const ApartmentList = require("./ApartmentList");

module.exports = function Main({ title, userName, apartments, categories }) {
  return (
    <Layout title={title} userName={userName}>
      <Filter categories={categories} />
      <div className="main">
        <ApartmentList apartments={apartments} />
      </div>
    </Layout>
  );
};
