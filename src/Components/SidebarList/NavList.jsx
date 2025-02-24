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
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-home"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-home"></use>
              </svg>
              <span className="lan-3">Dashboard </span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-widget"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-widget"></use>
              </svg>
              <span className="lan-6">Widgets</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-layout"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-layout"></use>
              </svg>
              <span className="lan-7">Active Links</span>
            </a>
          </li>
          <li className="sidebar-main-title">
            <div>
              <h6 className="lan-8">Applications</h6>
            </div>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"> </i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-project"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-project"></use>
              </svg>
              <span>Slider / Banner</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-file"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-file"></use>
              </svg>
              <span>About Event</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"> </i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-board"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-board"></use>
              </svg>
              <span>High Lights</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-ecommerce"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-ecommerce"></use>
              </svg>
              <span>Speakers</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-ecommerce"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-ecommerce"></use>
              </svg>
              <span>Publishers</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-email"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-email"></use>
              </svg>
              <span>Events</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-chat"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-chat"></use>
              </svg>
              <span>Executive Members</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-user"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-user"></use>
              </svg>
              <span>Gallery</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <label className="badge badge-light-success">New</label> */}
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-reports"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-reports"></use>
              </svg>
              <span>Our Partners</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-bookmark"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-bookmark"></use>
              </svg>
              <span>FAQ&apos;s</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-contact"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-contact"></use>
              </svg>
              <span>Registration</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-task"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-task"></use>
              </svg>
              <span>Socials</span>
            </a>
          </li>
          <li className="sidebar-list">
            {/* <i className="fa-solid fa-thumbtack"></i> */}
            <a className="sidebar-link sidebar-title link-nav" href="#">
              <svg className="stroke-icon">
                <use href="assets/svg/icon-sprite.svg#stroke-task"></use>
              </svg>
              <svg className="fill-icon">
                <use href="assets/svg/icon-sprite.svg#fill-task"></use>
              </svg>
              <span>User Access</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
