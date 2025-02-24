import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <>
      <li className="back-btn">
        <Link to="/" target="_parent">
          <img
            className="img-fluid"
            src="assets/images/logo/logo-icon.png"
            alt=""
          />
        </Link>
        <div className="mobile-back text-end">
          <span>Back</span>
          <i className="fa-solid fa-angle-right ps-2" aria-hidden="true"></i>
        </div>
      </li>
    </>
  );
}
