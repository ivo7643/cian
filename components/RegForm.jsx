const React = require("react");
const Layout = require("./Layout");

module.exports = function RegForm({ title, userName }) {
  return (
    <Layout title={title} userName={userName}>
      <form className="col s12 regForm" action="/api/auth/reg" method="POST">
        <div className="row">
          <div className="input-field col s6">
            <input
              name="login"
              id="login"
              className="validate"
              placeholder="login"
              required
            />
          </div>
          <div className="input-field col s6">
            <input
              name="email"
              id="email"
              className="validate"
              placeholder="email"
              required
            />
          </div>
          <div className="input-field col s6">
            <input
              name="password"
              id="password"
              className="validate"
              placeholder="password"
              required
            />
          </div>
          <div className="input-field col s6">
            <input
              name="passwordCheck"
              id="passwordCheck"
              className="validate"
              placeholder="passwordCheck"
              required
            />
          </div>

          <button
            className="btn waves-effect waves-light purple lighten-3"
            type="submit"
          >
            add
            <i className="material-icons right">send</i>
          </button>
        </div>
        <h2 className="regError"></h2>
      </form>
    </Layout>
  );
};
