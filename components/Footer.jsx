const React = require("react");

module.exports = function Footer() {
  return (
    <footer>
      <div>
        <img src="/img/logo.jpg" alt="brand logo pic" className="logo_img" />
      </div>
      <div className="footer_container">
        <p className="footer_p">Адрес: ул.Пушкина, д.Колотушкина </p>
        <p className="footer_p">emal: rieltor@domanet.ru</p>
      </div>
    </footer>
  );
};
