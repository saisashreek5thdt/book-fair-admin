import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

export default function PageContainer() {

  return (
    <>
      <div className="container-fluid default-dashboard">
        <div className="row widget-grid">
          <ProfileCard />
          <div className="col-xxl-auto col-xl-3 col-sm-6 box-col-3">
            <div className="row">
              <div className="col-xl-12">
                <div className="card widget-1">
                  <div className="card-body">
                    <div className="widget-content">
                      <div className="widget-round secondary">
                        <div className="bg-round">
                          <svg>
                            <use href="assets/svg/icon-sprite.svg#c-revenue"></use>
                          </svg>
                          <svg className="half-circle svg-fill">
                            <use href="assets/svg/icon-sprite.svg#halfcircle"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4>
                          $
                          <span className="counter" data-target="12">
                            12
                          </span>
                        </h4>
                        <span className="f-light">No Of Websites</span>
                      </div>
                    </div>
                    <div className="font-success f-w-500">
                      <i
                        className="bookmark-search me-1"
                        data-feather="trending-up"
                      ></i>
                      <span className="txt-success">+100</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card widget-1">
                    <div className="card-body">
                      <div className="widget-content">
                        <div className="widget-round success">
                          <div className="bg-round">
                            <svg>
                              <use href="assets/svg/icon-sprite.svg#c-customer"></use>
                            </svg>
                            <svg className="half-circle svg-fill">
                              <use href="assets/svg/icon-sprite.svg#halfcircle"></use>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4>
                            <span className="counter" data-target="845">
                              845
                            </span>
                            +
                          </h4>
                          <span className="f-light">Customers</span>
                        </div>
                      </div>
                      <div className="font-danger f-w-500">
                        <i
                          className="bookmark-search me-1"
                          data-feather="trending-down"
                        ></i>
                        <span className="txt-danger">+40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-auto col-xl-3 col-sm-6 box-col-3">
            <div className="row">
              <div className="col-xl-12">
                <div className="card widget-1">
                  <div className="card-body">
                    <div className="widget-content">
                      <div className="widget-round warning">
                        <div className="bg-round">
                          <svg>
                            <use href="assets/svg/icon-sprite.svg#c-profit"></use>
                          </svg>
                          <svg className="half-circle svg-fill">
                            <use href="assets/svg/icon-sprite.svg#halfcircle"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4>
                          <span className="counter" data-target="80">
                            0
                          </span>
                          %
                        </h4>
                        <span className="f-light">Publishers</span>
                      </div>
                    </div>
                    <div className="font-danger f-w-500">
                      <i
                        className="bookmark-search me-1"
                        data-feather="trending-down"
                      ></i>
                      <span className="txt-danger">-20%</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="card widget-1">
                    <div className="card-body">
                      <div className="widget-content">
                        <div className="widget-round primary">
                          <div className="bg-round">
                            <svg className="fill-primary">
                              <use href="assets/svg/icon-sprite.svg#c-invoice"></use>
                            </svg>
                            <svg className="half-circle svg-fill">
                              <use href="assets/svg/icon-sprite.svg#halfcircle"></use>
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="counter" data-target="10905">
                            0
                          </h4>
                          <span className="f-light">Authors</span>
                        </div>
                      </div>
                      <div className="font-success f-w-500">
                        <i
                          className="bookmark-search me-1"
                          data-feather="trending-up"
                        ></i>
                        <span className="txt-success">+50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-12 col-lg-12 ord-xl-12 ord-md-6 box-ord-6 box-col-8e">
            <div className="card">
              <div className="card-header card-no-border">
                <div className="header-top">
                  <h5>Active Links</h5>
                </div>
              </div>
              <div className="card-body px-0 pt-0 common-option">
                <div className="recent-table table-responsive currency-table recent-order-table custom-scrollbar">
                  <table className="table" id="main-recent-order">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Event Name</th>
                        <th>Event Organiser</th>
                        <th>Event Location</th>
                        <th>Event Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div>
                              <Link
                                className="f-14 mb-0 f-w-500 c-light"
                                to="/dashboard"
                              >
                                Mumbai Book Fair
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>NBT India</td>
                        <td>Azad Maidan</td>
                        <td>10: 00 AM</td>
                        <td>18 April, 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
