import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function HomeNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <style>{`
        @media screen and (max-width: 991px) {
          /* Stop the background body/wrapper from sliding left and creating white space */
          html.nav-open body,
          html.nav-open .wrapper,
          html.nav-open .main,
          html.nav-open .fixed-top {
            transform: none !important;
            -webkit-transform: none !important;
            left: 0 !important;
          }

          /* Make the blue sidebar expand to fill the screen space */
          .navbar-collapse {
            position: fixed !important;
            display: block !important;
            top: 0 !important;
            right: 0 !important;
            height: 100vh !important;
            /* Drastically widen the menu drawer to eliminate white space */
            width: 80vw !important; 
            max-height: 100vh !important;
            overflow-y: auto !important;
            padding: 80px 30px 20px 40px !important;
            /* Start hidden completely off-screen to the right */
            transform: translate3d(80vw, 0, 0) !important;
            -webkit-transform: translate3d(80vw, 0, 0) !important;
            transition: all 0.4s cubic-bezier(0.685, 0.0473, 0.346, 1) !important;
            z-index: 1050 !important;
          }

          /* Slide the expanded blue menu in smoothly over the page */
          html.nav-open .navbar-collapse {
            transform: translate3d(0px, 0, 0) !important;
            -webkit-transform: translate3d(0px, 0, 0) !important;
          }

          .navbar-collapse .navbar-nav {
            padding-left: 0 !important;
            margin-left: 0 !important;
          }

          .navbar-collapse .nav-item {
            width: 100% !important;
          }

          .navbar-collapse .nav-link {
            padding: 14px 0 !important;
            text-align: left !important;
            font-size: 16px !important;
          }
        }
      `}</style>

      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              id="navbar-brand"
              tag={Link}
            >
              Home
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-start"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/contact-page" tag={Link}>
                  Contact us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/staff-page" tag={Link}>
                  Doctors & Support Staff
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services-page" tag={Link}>
                  Medical Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/patientinfo-page" tag={Link}>
                  Patient Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/fees-page" tag={Link} >
                  Fees
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/appointments-page" tag={Link}>
                  Appointments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/afterhours-page" tag={Link}>
                  After Hours
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/career-page" tag={Link}>
                  Career
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HomeNavbar;
