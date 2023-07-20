const React = require("react");
const Layout = require("./Layout");
const Filter = require("./Filter");
const ApartmentList = require("./ApartmentList");


module.exports = function Main({ title, userLogin, apartments, categories }) {



  return (
    <Layout title={title} userLogin={userLogin}>
      <Filter categories={categories} />
      <div className="main">
        <ApartmentList apartments={apartments} />
      </div>
    </Layout>
  );
};
