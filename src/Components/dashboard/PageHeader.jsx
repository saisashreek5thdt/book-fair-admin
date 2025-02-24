/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const ProfileCard = ({ name }) => {
  return (
    <div className="ProfileCard u-cf">
      <div className="ProfileCard-avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-airplay m-0"
        >
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </svg>
      </div>
      <div className="ProfileCard-details">
        <div className="ProfileCard-realName">{name}</div>
      </div>
    </div>
  );
};

const EmptyMessage = () => {
  return (
    <div className="EmptyMessage">
      Your search turned up 0 results. This most likely means the backend is down, yikes!
    </div>
  );
};

export default function PageHeader() {
  return (
    <>
      <div className="page-header">
        <div className="header-wrapper row m-0">
          <form className="form-inline search-full col">
            <div className="form-group w-100">
              <div className="Typeahead Typeahead--twitterUsers">
                <div className="u-posRelative">
                  <input
                    className="demo-input Typeahead-input form-control-plaintext w-100"
                    type="text"
                    placeholder="Search Anything Here..."
                    name="q"
                    title=""
                    autoFocus
                  />
                  <div
                    className="spinner-border Typeahead-spinner"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  <i className="close-search" data-feather="x"></i>
                </div>
                <div className="Typeahead-menu"></div>
              </div>
            </div>
          </form>
          <div className="header-logo-wrapper col-auto p-0">
            <div className="logo-wrapper">
              <Link to="/">
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
            </div>
            <div className="toggle-sidebar">
              <i
                className="status_toggle middle sidebar-toggle"
                data-feather="align-center"
              ></i>
            </div>
          </div>
          {/* <div className="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
            <div className="notification-slider">
              <div className="d-flex h-100">
                <img src="assets/images/giftools.gif" alt="gif" />
                <h6 className="mb-0 f-w-400">
                  <span className="font-primary">Dont Miss Out! </span>
                  <span className="f-light">
                    Our new update has been released.
                  </span>
                </h6>
                <i className="icon-arrow-top-right f-light"></i>
              </div>
              <div className="d-flex h-100">
                <img src="assets/images/giftools.gif" alt="gif" />
                <h6 className="mb-0 f-w-400">
                  <span className="f-light">
                    Something you love is now on sale!
                  </span>
                </h6>
                <Link
                  className="ms-1"
                  to="https://1.envato.market/3GVzd"
                  target="_blank"
                >
                  Buy now !
                </Link>
              </div>
            </div>
          </div> */}
          <div className="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
            <ul className="nav-menus">
              <li className="fullscreen-body">
                <span>
                  <svg id="maximize-screen">
                    <use href="assets/svg/icon-sprite.svg#full-screen"></use>
                  </svg>
                </span>
              </li>
              <li>
                <span className="header-search">
                  <svg>
                    <use href="assets/svg/icon-sprite.svg#search"></use>
                  </svg>
                </span>
              </li>
              <li>
                <div className="mode">
                  <svg>
                    <use href="assets/svg/icon-sprite.svg#moon"></use>
                  </svg>
                </div>
              </li>
              <li className="onhover-dropdown">
                <div className="notification-box">
                  <svg>
                    <use href="assets/svg/icon-sprite.svg#notification"></use>
                  </svg>
                  <span className="badge rounded-pill badge-success">4 </span>
                </div>
                <div className="onhover-show-div notification-dropdown">
                  <h6 className="f-18 mb-0 dropdown-title">Notifications</h6>
                  <ul>
                    <li
                      className="b-l-primary border-4 toast default-show-toast align-items-center text-light border-0 fade show"
                      aria-live="assertive"
                      aria-atomic="true"
                      data-bs-autohide="false"
                    >
                      <div className="d-flex justify-content-between">
                        <div className="toast-body">
                          <p>Delivery processing</p>
                        </div>
                        <button
                          className="btn-close btn-close-white me-2 m-auto"
                          type="button"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </li>
                    <li
                      className="b-l-success border-4 toast default-show-toast align-items-center text-light border-0 fade show"
                      aria-live="assertive"
                      aria-atomic="true"
                      data-bs-autohide="false"
                    >
                      <div className="d-flex justify-content-between">
                        <div className="toast-body">
                          <p>Order Complete</p>
                        </div>
                        <button
                          className="btn-close btn-close-white me-2 m-auto"
                          type="button"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </li>
                    <li
                      className="b-l-secondary border-4 toast default-show-toast align-items-center text-light border-0 fade show"
                      aria-live="assertive"
                      aria-atomic="true"
                      data-bs-autohide="false"
                    >
                      <div className="d-flex justify-content-between">
                        <div className="toast-body">
                          <p>Tickets Generated</p>
                        </div>
                        <button
                          className="btn-close btn-close-white me-2 m-auto"
                          type="button"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </li>
                    <li
                      className="b-l-warning border-4 toast default-show-toast align-items-center text-light border-0 fade show"
                      aria-live="assertive"
                      aria-atomic="true"
                      data-bs-autohide="false"
                    >
                      <div className="d-flex justify-content-between">
                        <div className="toast-body">
                          <p>Delivery Complete</p>
                        </div>
                        <button
                          className="btn-close btn-close-white me-2 m-auto"
                          type="button"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="profile-nav onhover-dropdown pe-0 py-0">
                <div className="d-flex profile-media">
                  <img
                    className="b-r-10"
                    src="assets/images/dashboard/profile.png"
                    alt=""
                  />
                  <div className="flex-grow-1">
                    <span>User Name</span>
                    <p className="mb-0">
                      Admin <i className="middle fa-solid fa-angle-down"></i>
                    </p>
                  </div>
                </div>
                <ul className="profile-dropdown onhover-show-div">
                  <li>
                    <Link to="/dashboard">
                      <i data-feather="user"></i>
                      <span>Account </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <i data-feather="mail"></i>
                      <span>Inbox</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <i data-feather="file-text"></i>
                      <span>Taskboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <i data-feather="settings"></i>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i data-feather="log-in"> </i>
                      <span>Log out</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <script className="result-template" type="text/x-handlebars-template">
            
          </script> */}
          {/* <ProfileCard /> */}
          {/* <script className="empty-template" type="text/x-handlebars-template">
            
          </script> */}
          {/* <EmptyMessage /> */}
        </div>
      </div>
    </>
  );
}
