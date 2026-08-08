import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//////////just as an example of how to avoid typescript check ///@ts-ignore
import ScrollUpButton from "react-scroll-up-button";
// reactstrap components
import { Button, Col, Container, Row } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import BarButtonsLandPageHeader from "../../components/General/BarButtonsLandPageHeader";
import NewsCardsPreview from "../../components/General/NewsCardsPreview";
import OpeningHours2 from "../../components/General/OpeninHours2";
// import OpeningHours from "../../components/General/OpeningHours";
import OurTeam from "../../components/General/OurTeam";
import ServiceCardBlock from "../../components/General/ServiceCardBlock";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
// core components
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import newsContent from "../../data/news-content";
import staffContent from "../../data/staff-content";
import { headerScrolling } from "./commons";
import Announcement from "../../components/General/Announcement";
import TeleHealth from "../../components/General/TeleHealth";
import SearchNews from "../../components/General/SearchNews";
// import ModalAnnouncement from "../../components/General/ModalAnnouncement";

function LandingPage() {
  // const [firstFocus, setFirstFocus] = useState(false);
  // const [lastFocus, setLastFocus] = useState(false);

  const messageTitle = "GPs On Vermont Medical Centre";
  const bulkBilled = "gpv-bulk-billed-medical-centre.png";
  const privateBilled = "gpv-private-billed-medical-centre.png";

  const imageTest1 = "yellow-fever-badge.png";
  const imageTest2 = "q-fever-badge.png";
  const imageTest3 = "travel-immunisation-badge.png";
  const imageTest4 = "flu-vaccines-badge.png";
  
  // const telehealth = "gpv-telehealth.png"
  const landingPagePreviewNews = newsContent.filter( news => news.enabled );
  //const enabledNews = newsContent.filter( emp => emp.enabled );

  useEffect(() => {
    headerScrolling();
  });

  let seeMoreComponent = (
    <Row>
      <Col className="d-flex justify-content-center">
        <Link className="text-info" to="/news-nav">
          <Button color="info" className="font-paragraph">See More News</Button>
        </Link>
      </Col>
    </Row>
  );

  return (
    <>
      <ScrollUpButton style={{ bottom: 87 }}></ScrollUpButton>
      <HomeNavbar />

      <div className="wrapper">
        <LandingPageHeader
          title={messageTitle}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />

        <div className="section section-about-us">
          <Container>
            <BarButtonsLandPageHeader />
            
            {/* Welcome Section */}
            <Row>
              <Col className="mx-auto text-center align-content-center" md="12">
                <h2 className="title text-muted" style={{ textTransform: "none" }}>Welcome!</h2>
              </Col>
            </Row>
            
            <Row className="align-items-center">
              <Col sm="12" md="6" lg="3" className="mx-auto text-center bulk-billed-image align-self-center">
                <img className="img-fluid pb-2" width={"80%"} src={require(`../../assets/img/${bulkBilled}`)} alt={bulkBilled} />
              </Col>
              <Col sm="12" lg="6">
                <h5 className="description text-center">
                  At GPs on Vermont Medical Centre we are passionate about
                  supporting doctors to provide high quality primary and preventive health care to
                  the community. Health is important, but good health is
                  optimal. Having a comprehensive health management plan and a
                  preventative approach to your health is the key to sustaining
                  a long and fulfilling life of physical, emotional and social
                  wellbeing.
                </h5>
              </Col>
              <Col sm="12" md="6" lg="3" className="mx-auto text-center bulk-billed-image align-self-center">
                <img className="img-fluid pb-2" width={"80%"} src={require(`../../assets/img/${privateBilled}`)} alt={privateBilled} />
              </Col>
            </Row>
            
            {/* Accreditation Badges Section */}
            <Row className="mt-4">
              <Col className="mx-auto text-center align-content-center" md="12">
                <h2 className="title text-muted" style={{ textTransform: "none" }}>GPs on Vermont is an Accredited Vaccination Centre</h2>
                <br />
              </Col>
            </Row>
            
            <Row>
              <Col sm="12" md="6" lg="3" className="mx-auto text-center bulk-billed-image align-self-center">
                <Link to={`/service-details/17`}>
                  <img className="img-fluid pb-2" width={"80%"} src={require(`../../assets/img/${imageTest1}`)} alt={bulkBilled} />
                </Link>
              </Col>
              <Col sm="12" md="6" lg="3" className="mx-auto text-center bulk-billed-image align-self-center">
                <Link to={`/service-details/2`}>
                  <img className="img-fluid pb-2" width={"80%"} src={require(`../../assets/img/${imageTest3}`)} alt={bulkBilled} />
                </Link>
              </Col>
              <Col sm="12" md="6" lg="3" className="mx-auto text-center bulk-billed-image align-self-center">
                <Link to={`/service-details/3`}>
                  <img className="img-fluid pb-2" width={"80%"} src={require(`../../assets/img/${imageTest4}`)} alt={bulkBilled} />
                </Link>
              </Col>
              <Col sm="12" md="6" lg="3" className="mx-auto text-center bulk-billed-image align-self-center">
                <Link to={`/service-details/16`}>
                  <img className="img-fluid pb-2" width={"80%"} src={require(`../../assets/img/${imageTest2}`)} alt={privateBilled} />
                </Link>
              </Col>
            </Row>

            {/* Telehealth Layout Block */}
            <Row className="mt-5">
              <Col sm="12" md="8" lg="6" className="mx-auto text-center">
                <h2 className="title text-muted" style={{ textTransform: "none" }}>TeleHEALTH</h2>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="10" lg="8" className="mx-auto">
                <TeleHealth />
              </Col>
            </Row>

            {/* Consultation Hours Section */}
            <Row className="mt-5">
              <Col sm="12" md="8" lg="8" className="mx-auto text-center">
                <h2 className="title text-muted" style={{ textTransform: "none" }}>Consultation Hours</h2>
              </Col>
            </Row>
            <Row>
              {/* Expanded width to md="10" to prevent tabular schedule content from compressing on smaller views */}
              <Col sm="12" md="10" lg="8" className="mx-auto">
                <OpeningHours2 />
                {/* <Announcement/> */}
              </Col>
            </Row>
          </Container>
          {/* <ModalAnnouncement/> */}
        </div>

        {/* Latest News Layout Block */}
        <div className="section section-team text-center" style={{ padding: "40px 0 0 0" }}>
          <Container>
            <Row className="align-items-center mb-4">
              <Col sm="12" md="3" className="d-none d-md-block text-center align-self-center">
                {/* Image placeholder node left clean */}
              </Col>
              <Col sm="12" md="6" className="text-center">
                <h2 className="title text-muted my-0" style={{ textTransform: "none" }}>Latest News</h2>
              </Col>
              <Col sm="12" md="3" className="text-center text-md-right mt-3 mt-md-0">
                <SearchNews />
              </Col>
            </Row>
            <NewsCardsPreview news={landingPagePreviewNews} start={0} quantity={3} bottomComponent={seeMoreComponent} />
          </Container>
        </div>

        {/* Medical Services Layout Block */}
        <div className="section section-team text-center" style={{ padding: "60px 0 0 0" }}>
          <Container>
            <Row>
              <Col sm="12" lg="10" className="mx-auto">
                <h2 className="title text-muted mb-4" style={{ textTransform: "none", lineHeight: "1.4" }}>
                  Medical Services Provided by Doctors Consulting at GPs on Vermont Medical Centre
                </h2>
              </Col>
            </Row>
            <div className="team mt-3">
              <ServiceCardBlock />
            </div>
          </Container>
        </div>

        {/* Team Layout Block */}
        <div className="section section-team text-center" style={{ padding: "60px 0" }}>
          <Container>
            <Row>
              <Col sm="12" className="mx-auto">
                <h2 className="title text-muted mb-4" style={{ textTransform: "none" }}>The Doctors and Support Team</h2>
              </Col>
            </Row>
            <OurTeam staffData={staffContent} />
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
