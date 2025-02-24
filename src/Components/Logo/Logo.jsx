import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <div className="logo-wrapper">
        <Link to="/" target="_parent">
          <img
            className="img-fluid for-light"
            src="assets/images/logo/logo.png"
            alt=""
          />
          <img
            className="img-fluid for-dark"
            src="assets/images/logo/logo_dark.png"
            alt=""
          />
        </Link>
        <div className="back-btn">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="toggle-sidebar">
          <i
            className="status_toggle middle sidebar-toggle"
            data-feather="grid"
          ></i>
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link to="/" target="_parent">
          <img
            className="img-fluid"
            src="assets/images/logo/logo-icon.png"
            alt=""
          />
        </Link>
      </div>
    </>
  );
}
