const React = require("react");

module.exports = function Apartment({ apartment }) {
  return (
    <div className="col s4 apartmentOne " data-id={apartment.id}>
      <div className="card product grey darken-1">
        {/* <div className="card-name">
        </div> */}
        <div className="card-image">
          {apartment.Photos.length > 0 && <img src={apartment.Photos[0].url} />}
        </div>

        <div className="card-content">
          <span className="card-title">Категория: {apartment.categoryId}</span>
        </div>
        <div className="card-content">
          <span className="card-title">Стоимость: {apartment.price}</span>
        </div>
        <div className="card-content">
          <span className="card-title">Описание: {apartment.description}</span>
        </div>
        <div className="button_box">
          <button className="deleteApartment btn_inner">Удалить</button>
          <a href={`/adminApartments/updForm/${apartment.id}`}>
            <button className="updApartment btn_inner">Изменить</button>
          </a>
        </div>
        <div className="card-action black">
          <a href={`/apartments/${apartment.id}`}>Узнать подробнее</a>
        </div>
      </div>
    </div>
  );
};
