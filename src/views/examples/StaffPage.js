import React, { useEffect } from "react";
import staffContent from "../../data/staff-content";

// 1. CRITICAL PATH FIX: Ensure this points to your standard component loop file
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
        
        {/* Main Practitioner Section */}
        <div className="section section-team text-center pt-4">
          <Container className="text-muted">
            <div className="team">
              {/* This will now call Staff.js cleanly without crashing */}
              <Staff staffData={staffContent} isDoctor={true} />
            </div>
          </Container>
        </div>

        {/* Section Title Header */}
        <div className="text-center my-2">
          <Container>
            <Row>
              <Col sm="12" md="8" lg="6" className="mx-auto text-center">
                <h2 className="title text-muted my-0" style={{ textTransform: "none" }}>
                  Here is our support team
                </h2>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Support Staff Section */}
        <div className="section section-team text-center pt-2 pb-5">
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
