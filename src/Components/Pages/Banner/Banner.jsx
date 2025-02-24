/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { PageHeader, PageSidebar } from "../../index";

export default function Banner() {
  return (
    <>
      <div onLoad="startTime()">
        {/* Scroll Top Start */}
        <div className="tap-top">
          <i data-feather="chevrons-up"></i>
        </div>
        {/* Scroll Top End */}
        {/* Page Content Start */}
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
          {/* Page Header Start */}
          <PageHeader />
          {/* Page Header End */}
          {/* Page Body Start */}
          <div className="page-body-wrapper">
            {/* Page Sidebar Start */}
            <PageSidebar />
            {/* Page Sidebar End */}
            <div className="page-body">
              <div className="container-fluid">
                <div className="page-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3>Banner</h3>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/dashboard">
                            <svg className="stroke-icon">
                              <use href="assets/svg/icon-sprite.svg#stroke-home"></use>
                            </svg>
                          </Link>
                        </li>
                        <li className="breadcrumb-item">Dashboard</li>
                        <li className="breadcrumb-item active">Banner</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* Banner Page Container Start */}
              {/* Banner Page Container End */}
            </div>
          </div>
          {/* Page Body End */}
        </div>
        {/* Page Content End */}
      </div>
    </>
  );
}
