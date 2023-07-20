const React = require('react');

module.exports = function Apartment({ apartment }) {
  return (
    <div className="col s4 apartmentOne " data-id={apartment.id}>
      <div className="card product grey lighten-4">
        <div className="card-name">
          <span className="card-title">Название: {apartment.name}</span>
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
        <button className="deleteApartment">Удалить</button>
        <a href={`/apartments/updForm/${apartment.id}`}>
          <button className="updApartment">Изменить</button>
        </a>
        <div className="card-action black">
          <a href={`/apartments/${apartment.id}`}>Узнать подробнее</a>
        </div>
      </div>
    </div>
  );
};
