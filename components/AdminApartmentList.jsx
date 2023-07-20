const Layout = require('./Layout');
const React = require('react');
const AdminApartment = require('./AdminApartment');
const AddForm = require("./AddForm");

module.exports = function AdminApartmetList({ title, apartments, userLogin,userStat }) {
  return (
    <Layout title={title} userLogin={userLogin} userStat={userStat}>
      <AddForm />
      <div className="row adminAparmentList">
        {apartments.map((apartment) => (
          <AdminApartment apartment={apartment} key={apartment.id} />
        ))}
      </div>
    </Layout>
  );
};