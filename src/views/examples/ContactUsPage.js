import React, { useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Badge
} from "reactstrap";
import Iframe from "react-iframe";

import IconNumber from "../../components/General/IconNumber";
import BookingButton from "../../components/General/BookingButton";
import DarkFooter from "../../components/Footers/DarkFooter";
import IconSocialMediaItem from "../../components/General/IconSocialMediaItem";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

const ContactUsPage = () => {

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <div style={{ marginTop: 68 }}>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1611.18540853074!2d146.8789333572565!3d-36.13318348009144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b2158ff61e5afa1%3A0xf97759b974ef17cf!2s80%20Vermont%20St%2C%20Wodonga%20VIC%203690!5e0!3m2!1sen!2sau!4v1580709121873!5m2!1sen!2sau"
            width="100%"
            height="500"
            id="myId"
            title="Maps - GPs on Vermont Medical Centre"
            allowFullScreen
          />
        </div>
        <CardFooter tag="h2" className="text-center">
          <a
            className="title text-info"
            href="https://goo.gl/maps/1Uy3tyShraVWj6MP7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take me to GPs on Vermont
          </a>
        </CardFooter>

        <div className="section text-center">
          <Container className=" text-muted">
            <Row>
              <Col sm="12" md="6">
                <Card className={"card-data"}>
                  <CardHeader className="card-header ">Call Us</CardHeader>
                  <CardBody>
                    <IconSocialMediaItem
                      mediaId={"phone"}
                      link={"tel: 0260252189"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      color={"info"}
                      size={"lg"}
                    />
                    <hr></hr>
                    <div className="phone-badge-title text-right">
                      <Badge className="language-pill " pill>
                        {"02 6025 2189"}
                      </Badge>
                    </div>
                    <div className="p-3 ">
                      <div className="d-flex flex-row align-items-center font-paragraph ">
                        <div className="p-2">Press</div>
                        <IconNumber
                          className="p-2"
                          number="1"
                          s
                          backgroundIconClassName="fas fa-circle fa-stack-2x fa-icon-card-header"
                          foregroundIconClassName="fas fa-stack-1x fa-inverse "
                        />
                        <div className="p-2 text-left">for Appointments</div>
                      </div>
                      {/* <div className="d-flex flex-row align-items-center font-paragraph">
                        <div className="p-2">Press</div>
                        <IconNumber
                          className="p-2"
                          number="2"
                          backgroundIconClassName="fas fa-circle fa-stack-2x fa-icon-card-header"
                          foregroundIconClassName="fas fa-stack-1x fa-inverse "
                        />
                        <div className="p-2 text-left">for Nurse</div>
                      </div> */}
                      <div className="d-flex flex-row align-items-center font-paragraph">
                        <div className="p-2 ">Press</div>
                        <IconNumber
                          className="p-2"
                          number="2"
                          backgroundIconClassName="fas fa-circle fa-stack-2x fa-icon-card-header"
                          foregroundIconClassName="fas fa-stack-1x fa-inverse "
                        />
                        <div className="p-2 text-left">
                          for Health Professionals
                        </div>
                      </div>
                    </div>
                    {/* <hr></hr> */}

                  </CardBody>
                  <CardFooter>
                    {/* phone-badge */}
                  <div className="d-flex flex-row justify-content-center ">
                      {/* <div className="text-justified">
                        <i
                          className="fa fa-mobile-alt fa-lg "
                          style={{ marginRight: 2 }}
                        ></i>

                        <Badge className="language-pill" pill>
                          {"Mob : 0477 413 700"}
                        </Badge>
                      </div>
                      <div className="ml-3"></div> */}
                      {/* <div className="text-justified">
                        <i
                          className="fa fa-mobile-alt fa-lg "
                          style={{ marginRight: 2 }}
                        ></i>

                        <Badge className="language-pill" pill>
                          {"Mob : 0407224579"}
                        </Badge>
                      </div> */}
                      {/* <div className="ml-3"></div> */}
                      <div className="text-justified">
                        <i
                          className="fa fa-fax fa-lg "
                          style={{ marginRight: 2 }}
                        ></i>
                        <Badge className="language-pill" pill>
                          {"Fax :  02 6025 2981"}
                        </Badge>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col sm="12" md="6">
                <Card className={"card-data"}>
                  <CardHeader className="card-header">Email Us</CardHeader>
                  <CardBody>
                    <IconSocialMediaItem
                      mediaId={"email"}
                      link={"mailto: manager@gpsonvermont.com.au"}
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                      color={"info"}
                      size={"lg"}
                    />
                    <hr></hr>
                    <div className="p-5 text-center font-paragraph ">
                      <a
                        className="text-info"
                        href="mailto: manager@gpsonvermont.com.au"
                      >
                        manager@gpsonvermont.com.au
                      </a>
                    </div>
                    {/* <hr className="mt-4"></hr> */}


                  </CardBody>
                  <CardFooter  >
                    {/* align-items-center  */}
                  <div className="d-flex flex-row justify-content-center ">
                      <i
                        className="fa fa-keyboard fa-lg "
                        style={{ marginRight: 2 }}
                      ></i>

                      <div className="ml-3 ">
                        We will reply to you as soon as possible
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="card-data">
                  <CardHeader className="card-header">
                    <i className="far fa-calendar-alt fa-lg fa-icon-card-header"></i>
                    Booking
                  </CardHeader>
                  <CardBody style={{ height: 200 }}>
                    <div className="p-3 text-center  font-paragraph ">
                      Schedule yours now
                    </div>
                    <BookingButton doctorId="" size="large" />
                  </CardBody>
                  <CardFooter className="card-footer-padding">
                    <div className="text-justified">
                      {/* <i
                        className="fa fa-info-circle fa-lg "
                        style={{ marginRight: 10 }}
                      ></i>
                      HotDoc */}
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
};

export default ContactUsPage;
