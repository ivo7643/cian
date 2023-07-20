const Layout = require("./Layout")
const React = require('react');

module.exports = function AddForm({title}){
    return(
   <div className="form row">
        <div className="s12 pink lighten-4" >
    <form className="col s12 addForm" name='addForm' action="/api/apartments" method="POST">
      <div className="row">
        <div className="input-field col s6">
          <input name="name" id='name' className="validate" placeholder="name" required/>
        </div>
        <div className="input-field col s6">
          {/* <input name="categoryId" id='categoryId' className="validate" placeholder="categoryId" required/> */}
          <select name="select">
            <option value="value1">Значение 1</option>
            <option value="value2" selected>Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
        </div>
        <div className="input-field col s6">
          <input name="price"id='price' className="validate" placeholder="price" required/>
        </div>
        <div className="input-field col s6">
          <input name="description"  id='description' className="validate" placeholder="description" required/>
        </div>
        <div className="input-field col s6">
          <input name="map"  id='map' className="validate" placeholder="map" required/>
        </div>
        <button className="btn waves-effect waves-light purple lighten-3" type="submit" >add
         <i className="material-icons right">send</i>
        </button>
      </div>
      <h2 className="errorAdd"></h2>
    </form>
  </div>
  </div>
 
    )
}