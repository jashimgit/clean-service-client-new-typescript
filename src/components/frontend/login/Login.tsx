import "./login.css";

function Login() {
  return (
    <div className="back">
      <div className="div-center">
        <div className="content">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Login</h3>
              <hr />
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <hr />
                <button type="button" className="btn btn-link">
                  Signup
                </button>
                <button type="button" className="btn btn-link">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
