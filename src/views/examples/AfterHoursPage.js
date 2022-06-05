import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

import { Container } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const AfterHoursPage = () => {
  const message = "Please contact";

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={message}
          backgroundImgName={"after-hours.jpg"}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />
        <div className="section text-center">
          <Container className=" text-muted">
            <h3>
              Nurse on call (Free Health advice 24 hours a day from anywhere in Victoria) – <b><a href={`tel: 1300 606 024`}>1300 606 024</a></b>
            </h3>

            <h3>
              Wodonga Regional Hospital (Emergency Dept) – <b><a href={`tel: 02 6051 7111`}>02 6051 7111</a></b>
            </h3>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default AfterHoursPage;
