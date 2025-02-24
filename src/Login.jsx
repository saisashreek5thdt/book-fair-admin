import { LoginForm } from "./Components/index";

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7">
            <img
              className="bg-img-cover bg-center"
              src="assets/images/login/2.jpg"
              alt="looginpage"
            />
          </div>
          <div className="col-xl-5 p-0">
            <div className="login-card login-dark">
              <div>
                <div>
                  <a className="logo text-start" href="index.html">
                    <img
                      className="img-fluid for-light"
                      src="assets/images/logo/logo.png"
                      alt="looginpage"
                    />
                    <img
                      className="img-fluid for-dark"
                      src="assets/images/logo/logo_dark.png"
                      alt="looginpage"
                    />
                  </a>
                </div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
