const Layout = require('./Layout');
const React = require('react');
const AdminApartment = require('./AdminApartment');
const AddForm = require("./AddForm");

module.exports = function AdminApartmetList({ title, apartments, user }) {
  return (
    <Layout title={title} user={user}>
      <AddForm />
      <div className="row adminAparmentList">
        {apartments.map((apartment) => (
          <AdminApartment apartment={apartment} key={apartment.id} />
        ))}
      </div>
    </Layout>
  );
};