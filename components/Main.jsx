const React = require("react");
const Layout = require("./Layout");
const Filter = require("./Filter");
const ApartmentList = require("./ApartmentList");


module.exports = function Main({ title, userLogin, apartments, categories,userStat }) {



  return (
    <Layout title={title} userLogin={userLogin} userStat={userStat}>
      <Filter categories={categories} />
      <div className="main">
        <ApartmentList apartments={apartments} userStat={userStat} userLogin={userLogin}/>
      </div>
    </Layout>
  );
};
