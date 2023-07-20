const React = require("react");
const Apartment = require("./Apartment");


module.exports = function ApartmetList({ apartments }) {
  return (
    <div className="row AparmentList">
      {apartments.map((apartment) => (
        <Apartment apartment={apartment} key={apartment.id} />
      ))}
    </div>
  );
};