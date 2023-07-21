const Layout = require("./Layout")
const React = require('react');

module.exports = function AddForm({title}){
    return(
  <div className="form row">
    <div className="s12 pink lighten-4" >
      <form className="col s12 addForm" name='addForm' action="/api/apartments/addProduct" method="POST">
        <div className="row">
          <select name="categoryId" id='categoryId' className="input-field col s6">
            <option value="1">Дом</option>
            <option value="2">Квартира</option>
            <option value="3">Комната</option>
          </select>
          <div className="input-field col s6">
            <input name="name" id='name' className="validate" placeholder="название объекта" required/>
          </div>
          <div className="input-field col s6">
            <input name="price" id='price' className="validate" placeholder="стоимость" required/>
          </div>
          <div className="input-field col s6">
            <input name="description" id='description' className="validate" placeholder="описание" required/>
          </div>
          <div className="input-field col s6">
            <input name="map"  id='map' className="validate" placeholder="город" required/>
          </div>
          <div className="input-field col s6">
            <input name="url" type="file" multiple id='url' className="validate" placeholder="картинка" required/>
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