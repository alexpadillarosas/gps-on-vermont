import React, { useEffect } from "react";
import { Container } from "reactstrap";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const FormLinksPage = () => {
  const message = "ABC";

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
          <Container className="text-muted"></Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default FormLinksPage;
