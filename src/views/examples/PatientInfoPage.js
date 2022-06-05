import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

import patientsInfo from "../../data/patientsInfo-content";
import InfoCard from "../../components/General/InfoCard";
import BookingButton from "../../components/General/BookingButton";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const PatientInfoPage = () => {
  const message = "Patients Information";

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
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[0].title}
                  descriptions={patientsInfo[0].descriptions}
                  items={patientsInfo[0].items}
                  iconClassName="far fa-calendar-alt fa-lg"
                  headerClassName="text-left"
                  headerRightContent={
                    <BookingButton className="btn-weight" size="large" />
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[1].title}
                  descriptions={patientsInfo[1].descriptions}
                  items={patientsInfo[1].items}
                  iconClassName="fas fa-ban fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[2].title}
                  descriptions={patientsInfo[2].descriptions}
                  items={patientsInfo[2].items}
                  iconClassName="fa fa-user-nurse fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard
                  title={patientsInfo[3].title}
                  descriptions={patientsInfo[3].descriptions}
                  items={patientsInfo[3].items}
                  iconClassName="fa fa-notes-medical fa-lg"
                  headerClassName="text-left"
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Link className="text-info" to="/fees-page">
                  <Button color="info" className=" font-paragraph" >See Fees</Button>
                </Link>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default PatientInfoPage;
