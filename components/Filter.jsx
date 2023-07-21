const React = require("react");

module.exports = function Filter({ categories }) {
  return (
    <div className="filter_container">
      {categories.map((category) => (
        <div key={category.id} className="btn_box">
          <a href={`/${category.id}`}>
            <button className="btn_inner">{category.name}</button>
          </a>
        </div>
      ))}
    </div>
  );
};
