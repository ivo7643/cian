const React = require("react");

module.exports = function Filter({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <button>{category.name}</button>
        </div>
      ))}
    </div>
  );
};
