import { Logo, NavList } from "../index";

export default function PageSidebar() {
  return (
    <>
      <div className="sidebar-wrapper" data-sidebar-layout="stroke-svg">
        <div>
          <Logo />
          <nav className="sidebar-main">
            <div className="left-arrow" id="left-arrow">
              <i data-feather="arrow-left"></i>
            </div>
            <NavList />
            <div className="right-arrow" id="right-arrow">
              <i data-feather="arrow-right"></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
