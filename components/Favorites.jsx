const React = require("react");
const Layout = require("./Layout");
const Apartment = require("./Apartment");




module.exports = function Favorites({ favorites,title, userLogin,userStat }) {

return (
    <Layout title={title} userLogin={userLogin} userStat={userStat}>
      <div className="favorites">
   {favorites.map((favorite)=>{
    return <Apartment apartment={favorite.Apartment} userStat={userStat} userLogin={userLogin}/>
   })}
      </div>
    </Layout>
  );
};
