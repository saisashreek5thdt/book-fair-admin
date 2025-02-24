import { Link } from "react-router-dom";
import { NavLogo } from "../index";

export default function NavList() {
  return (
    <>
      <div id="sidebar-menu">
        <ul className="sidebar-links" id="simple-bar">
          <NavLogo />
          <li className="pin-title sidebar-main-title">
            <div>
              <h6>Pinned</h6>
            </div>
          </li>
          <li className="sidebar-main-title">
            <div>
              <h6 className="lan-1">General</h6>
            </div>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            {/* <label className="badge badge-light-primary">13</label> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-home"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-home"></use>
              </svg>
              <span className="lan-3">Dashboard </span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/widget"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-widget"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-widget"></use>
              </svg>
              <span className="lan-6">Widgets</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/"
              target="_parentLink"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-layout"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-layout"></use>
              </svg>
              <span className="lan-7">Active Links</span>
            </Link>
          </li>
          <li className="sidebar-main-title">
            <div>
              <h6 className="lan-8">Applications</h6>
            </div>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"> </i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/banner"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-project"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-project"></use>
              </svg>
              <span>Slider / Banner</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/about"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-file"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-file"></use>
              </svg>
              <span>About Event</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"> </i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/highlights"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-board"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-board"></use>
              </svg>
              <span>High Lights</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/speakers"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-ecommerce"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-ecommerce"></use>
              </svg>
              <span>Speakers</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/publishers"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-ecommerce"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-ecommerce"></use>
              </svg>
              <span>Publishers</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/events"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-email"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-email"></use>
              </svg>
              <span>Events</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/members"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-chat"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-chat"></use>
              </svg>
              <span>Executive Members</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/gallery"
              target="_parentLink"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-user"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-user"></use>
              </svg>
              <span>Gallery</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <label className="badge badge-light-success">New</label> */}
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/partners"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-reports"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-reports"></use>
              </svg>
              <span>Our Partners</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/faqs"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-bookmark"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-bookmark"></use>
              </svg>
              <span>FAQ&apos;s</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/registration"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-contact"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-contact"></use>
              </svg>
              <span>Registration</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/socials"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-task"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-task"></use>
              </svg>
              <span>Socials</span>
            </Link>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <Link
              className="sidebar-link sidebar-title link-nav"
              to="/userAccess"
              target="_parent"
            >
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-task"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-task"></use>
              </svg>
              <span>User Access</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
