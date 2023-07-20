const React = require("react");

module.exports = function Filter({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <a href={`/${category.id}`}>
            <button>{category.name}</button>
          </a>
        </div>
      ))}
    </div>
  );
};
