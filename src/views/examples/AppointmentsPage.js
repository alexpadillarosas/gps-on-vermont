import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

import { Container } from "reactstrap";
import patientsInfo from "../../data/patientsInfo-content";
import InfoCard from "../../components/General/InfoCard";
import BookingButton from "../../components/General/BookingButton";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

//https://daveceddia.com/pluggable-slots-in-react-components/
const AppointmentsPage = () => {
  const message = "Schedule now";

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
          <Container className=" text-muted">
            <InfoCard
              // record={patientsInfo[0]}
              title={patientsInfo[0].title}
              descriptions={patientsInfo[0].descriptions}
              items={patientsInfo[0].items}
              iconClassName="far fa-calendar-alt fa-lg"
              headerClassName="text-left"
              headerRightContent={
                <BookingButton className="btn-weight" size="large" />
              }
            ></InfoCard>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default AppointmentsPage;
