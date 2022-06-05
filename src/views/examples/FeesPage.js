import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

import { Container } from "reactstrap";
import TableData from "../../components/General/TableData";
import feeContent from "../../data/fees-content";
import DarkFooter from "../../components/Footers/DarkFooter";
import BookingButton from "../../components/General/BookingButton";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const FeesPage = () => {
  const message = "";

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
          {feeContent.map( (fee, index) => (
          <Container className=" text-muted">
            <TableData
              feeData={fee}
              index={index}
              headerRightContent={
                <BookingButton className="btn-weight" size="large" />
              }
            />
          </Container>
          ))}

        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default FeesPage;
