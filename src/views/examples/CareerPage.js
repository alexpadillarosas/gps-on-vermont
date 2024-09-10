import React, { useEffect } from "react";
import { headerScrolling } from "./commons";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Container, Row, Col } from "reactstrap";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
// import { RibbonContainer, RightCornerLargeRibbon } from "react-ribbons";
// import jobOffers from "../../data/job-offers";
import ReactLinkify from "react-linkify";

const CareerPage = () => {
  useEffect(() => {
    headerScrolling();
  });

  const messageTitle = "CAREER";
  // const DEFAULT_IMAGE = "gpv-news.png";

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={messageTitle}
          backgroundImgName={"career-image.jpg"}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />

        <div className="section section-about-us" >
          <ReactLinkify >
                        
            <Container >
              <Row >
                  <Col sm="12" lg="12" className="">
                      <h3 className="title text-muted ml-auto">
                      Welcome to our careers section. Here you can view our current available positions with our support team.
                      </h3>
                  </Col>
              </Row>
              <Row>
                  <Col sm="12" lg="12" className="">
                      <h5 className="description text-left">
                      GPs on Vermont Is a modern, well-equipped medical centre, conveniently located in Wodonga’s medical district. We service the broader Albury Wodonga community.
                      </h5>
                  </Col>
              </Row>
              <Row>
                  <Col sm="12" lg="12" className="">
                      <h5 className="description text-left">
                      One of the wonderful things about GPs on Vermont Medical Centre is our tight knit professional team. It has really shone this past year, so much so that the Albury Wodonga community has readily embraced us and we are able to expand accepting more doctors to consult here and new staff. We are interested in finding someone who is more than their credentials. Someone who is compatible with the team, the doctors consulting here and their patients and our medical centres values. As well as being willing to relocate to the area permanently.
                      </h5>
                  </Col>
              </Row>
              <Row>
                  <Col sm="12" lg="12" className="">
                      <h5 className="description text-left">
                      We are proud of being able to provide a work environment where our employees and the doctors consulting here make a difference and continue to learn, develop and thrive in their specific career interests.
                      </h5>
                  </Col>
              </Row>
              <Row>
                  <Col sm="12" lg="12" className="">
                      <h5 className="description text-left">
                      If we have piqued your interest and a position listed below appeals to you or if you have any queries please email us at manager@gpsonvermont.com.au.
                      </h5>
                  </Col>
              </Row>
              <Row>
                  <Col sm="12" lg="12" className="">
                      <h5 className="description text-left">
                      We look forward to hearing from you!
                      </h5>
                  </Col>
              </Row>
        </Container>
      </ReactLinkify>  
    </div>
{/*  
        <div className="section text-center">
          <Container className=" text-muted">
            <div className="section-career-overview">
              <div className="separator separator-primary"></div>
              {jobOffers.filter( job => job.enabled).map((job, index) => (
                <RibbonContainer key={index} className={"ribbon-container"}>
                  <RightCornerLargeRibbon
                    backgroundColor={job.ribbonTextBkgColor}
                    color={job.ribbonTextColor}
                  >
                    {job.ribbonText}
                  </RightCornerLargeRibbon>

                  <article>
                    <img
                      src={require(`../../assets/img/${
                        !job.image ? DEFAULT_IMAGE : job.image
                      }`)}
                      alt={job.title}
                    />
                    <section>
                      <ReactLinkify >
                        <h3>Position: {job.title}</h3>

                        {job.descriptions.map((par, index) => (
                          <p key={index}>{par}</p>
                        ))}
                        <div>
                          {job.links.map((link, index) => (
                            <cite key={index}>
                              <a href={`tel: ${link.value}`}>{link.display}</a>
                            </cite>
                          ))}
                        </div>
                        <footer>
                          <br></br>
                          <h5>{job.footer}</h5>
                        </footer>
                      </ReactLinkify>
                    </section>
                  </article>
                </RibbonContainer>
              ))}
            </div>
          </Container>
        </div>
*/}   
        <DarkFooter />
      </div>
    </>
  );
};

export default CareerPage;
