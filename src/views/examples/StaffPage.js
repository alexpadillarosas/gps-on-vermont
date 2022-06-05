import React, { useEffect } from "react";
import staffContent from "../../data/staff-content";
import Staff from "../../components/General/Staff";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const StaffPage = () => {
  const message = "Here is our team";

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
        <div className="section section-team text-center">
          <Container className="text-muted">
            <div className="team">
              <Staff staffData={staffContent} />
            </div>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};
export default StaffPage;
