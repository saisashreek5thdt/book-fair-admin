import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const navigate = useNavigate();

    const loginFormHandler = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }

  return (
    <>
      <div className="login-main">
        <form className="theme-form" onSubmit={loginFormHandler}>
          <h4>Sign in to account</h4>
          <p>Enter your email & password to login</p>
          <div className="form-group">
            <label className="col-form-label">Email Address</label>
            <input
              className="form-control"
              type="email"
              placeholder="test@gmail.com"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label">Password</label>
            <div className="form-input position-relative">
              <input
                className="form-control"
                type="password"
                name="login[password]"
                placeholder="*********"
              />
              <div className="show-hide">
                <span className="show"> </span>
              </div>
            </div>
          </div>
          <div className="form-group mb-0">
            <div className="form-check">
              <input
                className="checkbox-primary form-check-input"
                id="checkbox1"
                type="checkbox"
              />
              <label
                className="text-muted form-check-label"
                htmlFor="checkbox1"
              >
                Remember password
              </label>
            </div>
            <button
              className="btn btn-primary btn-block w-100 mt-3"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
