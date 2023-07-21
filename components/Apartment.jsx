const React = require("react");

module.exports = function Apartment({ apartment, userStat, userLogin, favorite }) {
  return (
    <div className="col s4 apartmentOne " data-id={apartment.id} >
      <div
        className="card apartment  grey darken-1
"
      >
        <div className="card-image">
          {apartment.Photos.length > 0 && <img src={apartment.Photos[0].url} />}
          <span className="card-name">{apartment.name}</span>
        </div>
        <div className="card-content">
          <span className="card-title">Стоимость: {apartment.price}</span>
        </div>
        <div className="card-action">
          <a href={`/apartments/${apartment.id}`}>Узнать подробнее</a>


          {userLogin && !userStat && !favorite &&(

            <button className="favBut" data-id={apartment.id}>
              Добавить в избранное
            </button>
          )}

          {userLogin && !userStat && favorite &&(
            <button className="delFavBut" data-id={favorite.id}>
            Удалить из избранного
          </button>
          )}

        </div>
      </div>
    </div>
  );
};
