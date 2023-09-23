import React from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { Container, Row, Col } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Redirect } from "react-router-dom";
import IconCheckList from "../../components/General/IconCheckList";
import servicesContent from "../../data/services-content";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import BackButton from "../../components/General/BackButton";

const ServiceDetailsPage = ({ match }) => {
  const idParam = match.params.id;

  const services = servicesContent.filter(ser => ser.id === idParam);

  if (!(Array.isArray(services) && services.length)) {
    return (
      <>
        <Redirect to="/not-found" />;
      </>
    );
  } else {
    const service = services[0];
    let path = "our-services-people.jpg";

    return (
      <>
        <OtherNavbar />
        <div className="wrapper">
          <LandingPageHeader
            title={service.title}
            imageClassName={"page-header page-header-xsmall"}
            contentClassName={"content-center-other-pages"}
            titleClassName={"title-small-header"}
          />

          <div className="section text-center">
            <BackButton children={"Go Back To Medical Services Your Doctor Provides"} className="btn-round our-services-go-back-button"/>
            <Container className=" text-muted">
              <div className="justify-content-center">
                <img
                  className="img-fluid"
                  width={"70%"}
                  src={require(`../../assets/img/${path}`)}
                  alt={service.title}
                />
              </div>
              <h1>{""}</h1>
              {Array.isArray(service.items) && service.items.length ? (
                <Row>
                  <Col md="7" xl="8">
                    {service.introDescriptions.map((introDesc, index) => (
                      <h5 key={index} className="description text-left">
                        {introDesc}
                      </h5>
                    ))}
                  </Col>
                  <Col md="5" xl="4">
                    <IconCheckList
                      list={service.items}
                      className="text-left font-paragraph text-muted"
                      ulClassName="fa-ul"
                      liClassName="fa-li"
                      iconClassName="fa fa-check-circle fa-lg"
                    />
                  </Col>
                </Row>
              ) : (
                  <>
                    {service.introDescriptions.map((introDesc, index) => (
                      <h5 key={index} className="description">
                        {introDesc}
                      </h5>
                    ))}
                  </>
                )}

              {service.sections.length > 0 ? (
                <>
                  {service.sections.map((section, index) => (
                    <Row key={index} className="justify-content-md-center">
                      <Col className="text-center" lg="8" md="12">
                        <h1>{""}</h1>
                        <hr className="line-segment" />
                        <h2 className="title text-uppercase">
                          {section.title}
                        </h2>
                        <hr className="line-segment" />
                        {section.topics.map((topic, index) => (
                          <div key={index}>
                            <h3 className="title text-capitalize sub-title">
                              {topic.title}
                            </h3>
                            {
                              (topic.type = "CARD" ? (
                                <IconCheckList
                                  list={topic.descriptions}
                                  className="text-left font-paragraph text-muted"
                                  ulClassName="fa-ul"
                                  liClassName="fa-li"
                                  iconClassName="fa fa-check-circle fa-lg"
                                />
                              ) : (
                                  topic.descriptions.map((desc, index) => (
                                    <h5
                                      key={index}
                                      className="description text-left"
                                    >
                                      {desc}
                                    </h5>
                                  ))
                                ))
                            }
                          </div>
                        ))}
                      </Col>
                    </Row>
                  ))}
                </>
              ) : null}
            </Container>
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }
};

export default ServiceDetailsPage;
