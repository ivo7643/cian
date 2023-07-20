const React = require("react");
const Layout = require("./Layout");

module.exports = function ApartmentCard({ title, apartment, userStat}) {
  return (
    <Layout title={title} userStat={userStat}>
      <div className="col s4 apartmentOne " data-id={apartment.id}>
        <div className="card apartment deep-purple darken-3">
          <div className="card-image">
            {apartment.Photos.length > 0 && (
              <img src={apartment.Photos[0].url} />
            )}
            <span className="card-title">{apartment.name}</span>
          </div>
          <div className="card-content">
            <span className="card-title">Стоимость: {apartment.price}</span>
          </div>
          <div className="card-content">
            <span className="card-title">
              Описание: {apartment.description}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
