import React, { useEffect } from "react";
import { Container } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { headerScrolling } from "./commons";
import Services from "../../components/General/Services";
import servicesContent from "../../data/services-content";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const OurServicesPage = () => {
  const message = "Medical Services Provided by Your Doctor";


  const enabledServicesContent = servicesContent.filter( service => service.enabled );
  
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
        <div className="section text-center">
          <Container className="text-muted">
            <Services servicesData={enabledServicesContent} />
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default OurServicesPage;
