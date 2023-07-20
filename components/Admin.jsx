const Layout = require("./Layout")
const React = require('react');
const Product = require("./Product");
const AddForm = require("./AddForm");


module.exports = function ProductsList({title,apartments,user}){
    return(
        <Layout title={title} user={user}>
            <AddForm/>
        <div className="row aparmentList">  
    {
        apartments.map(apartment=><Apartment apartment={apartment} key={apartment.id}/>)
    }
    </div>  
       </Layout>
    )
}