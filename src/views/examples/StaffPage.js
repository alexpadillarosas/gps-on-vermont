import React, { useEffect } from "react";
import staffContent from "../../data/staff-content";
import Staff from "../../components/General/Staff";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { headerScrolling } from "./commons";
import { Col, Container, Row } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const StaffPage = () => {
  const message = "Doctors consulting here & Support Staff";

  useEffect(() => {
    headerScrolling();
  });

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={message}
          imageClassName={"page-header page-header-xsmall"}
          contentClassName={"content-center-other-pages"}
          titleClassName={"title-small-header"}
        />
        <dir className="new-line"></dir>
        <div className="text-center">
          <Container>
            <Row>
              <Col sm="12" md="8" lg="6" className="ml-auto mr-auto text-center">
                {/* <h2 className="title text-muted">D</h2> */}
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container className="text-muted">
            <div className="team">
              <Staff staffData={staffContent} isDoctor={true} />
            </div>
          </Container>
        </div>

        <div className="text-center">
          <Container>
            <Row>
              <Col sm="12" md="8" lg="6" className="ml-auto mr-auto text-center">
                <h2 className="title text-muted">Here is our support team</h2>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container className="text-muted">
            <div className="team">
              <Staff staffData={staffContent} isDoctor={false}/>
            </div>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};
export default StaffPage;
