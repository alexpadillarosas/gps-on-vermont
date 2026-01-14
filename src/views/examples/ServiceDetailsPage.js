import React from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { Container, Row, Col } from "reactstrap";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Redirect } from "react-router-dom";
import IconCheckList from "../../components/General/IconCheckList";
import servicesContent from "../../data/services-content";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import BackButton from "../../components/General/BackButton";
import CallUsButton from "../../components/General/CallUsButton";
import BookingButton from "../../components/General/BookingButton";

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

          <div className="booking-section py-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px' }}>
            <div className="container text-center">
              {/* Make the title optional depending con the available options */}
              {(
                service?.displayGeneralBookingButton === true ||
                (("displayBookingButtonFor" in service) &&
                 (Array.isArray(service?.displayBookingButtonFor) &&
                  service.displayBookingButtonFor.length > 0))
              ) && (
                <h2
                  className="mb-4 btn-font"
                  style={{ color: "#546671", fontWeight: "bold" }}
                >
                  READY TO BOOK YOUR APPOINTMENT ONLINE?
                </h2>
              )}

              
              {service?.displayGeneralBookingButton && (
                <Row className="justify-content-center g-4 gy-4">
                  <Col lg="4" md="6" xs="12" className="mb-4 d-flex align-items-stretch">
                    <div 
                      className="p-4 bg-white shadow-sm d-flex flex-column w-100" 
                      style={{ 
                        borderRadius: '12px', 
                        border: '1px solid #e9ecef'
                      }}
                    >
                      <div className="mb-3">
                          <i className="fas fa-user-md fa-2x" style={{ color: '#28a745' }}></i>
                      </div>
                      
                      {/* mb-auto pushes the button to the bottom so all buttons align */}
                      <div className="mb-auto">
                          <h5 className="btn-font mb-3" style={{ fontSize: '1.1rem' }}>{"GPs On Vermont Doctors"}</h5>
                      </div>

                      <div className="mt-3">
                        <BookingButton 
                            size="large" 
                            label="Book Online"
                            className="w-100" 
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              


              {/* Doctors Grid */}
              {/* Added g-4 for horizontal and gy-4 for vertical gutters */}
              <Row className="justify-content-center g-4 gy-4">
                {service?.displayBookingButtonFor?.map((doctor) => (
                  /* Added mb-4 to ensure spacing when cards wrap to a second row */
                  <Col key={doctor.id} lg="4" md="6" xs="12" className="mb-4 d-flex align-items-stretch">
                    <div 
                      className="p-4 bg-white shadow-sm d-flex flex-column w-100" 
                      style={{ 
                        borderRadius: '12px', 
                        border: '1px solid #e9ecef'
                      }}
                    >
                      <div className="mb-3">
                          <i className="fas fa-user-md fa-2x" style={{ color: '#28a745' }}></i>
                      </div>
                      
                      {/* mb-auto pushes the button to the bottom so all buttons align */}
                      <div className="mb-auto">
                          <h5 className="btn-font mb-3" style={{ fontSize: '1.1rem' }}>{doctor.name}</h5>
                      </div>

                      <div className="mt-3">
                        <BookingButton 
                            size="large" 
                            doctorId={doctor.id}
                            label="Book Online"
                            className="w-100" 
                        />
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="container text-center"> 
              {/* Specialized Call Section */}
              {service?.displayCallUsButton && (
                <div className="mt-5 pt-4 border-top">
                  {/* <p className="text-muted mb-3">Call to make an appointment.</p> */}
                  <h2 className="mb-4 btn-font" style={{ color: '#546671', fontWeight: 'bold' }}>
                    CALL TO MAKE AN APPOINTMENT
                  </h2>
                  <div className="d-flex justify-content-center">
                    <CallUsButton 
                      size="large"
                      phoneNumber="(02) 6025 2189"
                      locationName="Call Reception"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <DarkFooter />
        </div>
      </>
    );
  }
};

export default ServiceDetailsPage;
