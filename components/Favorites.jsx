const React = require("react");
const Layout = require("./Layout");




module.exports = function Favorites({ title, userLogin, apartments, categories,userStat }) {

return (
    <Layout title={title} userLogin={userLogin} userStat={userStat}>
      <div className="favorites">
    you favorites
      </div>
    </Layout>
  );
};
