const React = require("react");
const Layout = require("./Layout");

module.exports = function ApartmentCard({
  title,
  apartment,
  userStat,
  userLogin,
}) {
  return (
    <Layout title={title} userStat={userStat} userLogin={userLogin}>
      <div className="apartmentOne_card" data-id={apartment.id}>
        <div className="apartment_card grey darken-1">
          <div className="photos_container">
            {apartment.Photos.map((photo) => (
              <div key={photo.id} className="card-image">
                <img className="galery_photo" src={photo.url} />
              </div>
            ))}
          </div>
          <div className="description_container">
            <span className="oneCard-title">{apartment.name}</span>
            <div className="card-content">
              Стоимость:
              <span className="oneCard-price">{apartment.price}</span>
            </div>
            <div className="card-content">
              <span className="oneCard-title">
                Описание: {apartment.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
