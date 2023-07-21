const React = require("react");
const Layout = require("./Layout");

module.exports = function Page404({ title, userLogin, userStat }) {
  return (
    <Layout title={title} userLogin={userLogin} userStat={userStat}>
      <div className="contaner_404">
        <h2 className="four">4</h2>
        <img
          className="image_404"
          src="https://papik.pro/uploads/posts/2022-08/1661894853_2-papik-pro-p-smailik-otdaet-chest-png-2.jpg"
          alt="404"
        />
        <h2 className="four">4</h2>
      </div>
    </Layout>
  );
};
