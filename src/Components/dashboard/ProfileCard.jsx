import { Link } from "react-router-dom";

export default function ProfileCard() {
  return (
    <>
      <div className="col-xxl-4 col-sm-6 box-col-6">
        <div className="card profile-box">
          <div className="card-body">
            <div className="d-flex media-wrapper justify-content-between">
              <div className="flex-grow-1">
                <div className="greeting-user">
                  <h2 className="f-w-600">Welcome User!</h2>
                  <p>Here whats happing in your account today</p>
                  <div className="whatsnew-btn">
                    <Link
                      className="btn btn-outline-white"
                      to="/"
                      target="_blank"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="clockbox">
                  <svg
                    id="clock"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 600"
                  >
                    <g id="face">
                      <circle
                        className="circle"
                        cx="300"
                        cy="300"
                        r="253.9"
                      ></circle>
                      <path
                        className="hour-marks"
                        d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
                      ></path>
                      <circle
                        className="mid-circle"
                        cx="300"
                        cy="300"
                        r="16.2"
                      ></circle>
                    </g>
                    <g id="hour">
                      <path className="hour-hand" d="M300.5 298V142"></path>
                      <circle
                        className="sizing-box"
                        cx="300"
                        cy="300"
                        r="253.9"
                      ></circle>
                    </g>
                    <g id="minute">
                      <path className="minute-hand" d="M300.5 298V67"></path>
                      <circle
                        className="sizing-box"
                        cx="300"
                        cy="300"
                        r="253.9"
                      ></circle>
                    </g>
                    <g id="second">
                      <path className="second-hand" d="M300.5 350V55"></path>
                      <circle
                        className="sizing-box"
                        cx="300"
                        cy="300"
                        r="253.9"
                      ></circle>
                    </g>
                  </svg>
                </div>
                <div className="badge f-10 p-0" id="txt"></div>
              </div>
            </div>
            <div className="cartoon">
              <img
                className="img-fluid"
                src="assets/images/dashboard/cartoon.svg"
                alt="vector women with leptop"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
