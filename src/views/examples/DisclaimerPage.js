import React, { useEffect } from "react";

import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Container, Row, Col } from "reactstrap";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const DisclaimerPage = () => {
    const message = "Disclaimer";

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

                <div className="section section-about-us" >
                    <Container >
                        <Row >
                            <Col sm="12" lg="12" className="">
                                <h5 className="description text-left">
                                While we have exercised due care in ensuring the accuracy of the material contained on this website, the content provided is for informational purposes only, and should not be taken as independent professional medical advice.
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" lg="12" className="">
                                <h5 className="description text-left">
                                Nothing contained in this site is intended to be used as medical advice and it is not intended to be used to diagnose, treat, cure or prevent any disease, nor should it be used for therapeutic purposes or as a substitute for your own health professional's advice.
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" lg="12" className="">
                                <h5 className="description text-left">
                                GPs on Vermont Medical Centre does not accept any liability for any injury, loss or damage incurred by use of or reliance on the information provided on this website.
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" lg="12" className="">
                                <h5 className="description text-left">
                                This website contains links to other websites which are external to GPs on Vermont Medical Centre. Links to external websites are provided for the user’s convenience and do not constitute an endorsement or a recommendation of any third party products or services. We take reasonable care in selecting linking websites but accept no responsibility for the material contained in a website that is linked to our site. It is the responsibility of the user to make their own decisions about the accuracy, currency, reliability and correctness of information contained in linked external websites. Any expressed views or recommendations in linked sites do not necessarily reflect those of the GPs on Vermont Medical Centre.
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <br/>
            <br/>
            <DarkFooter />
        </>
    );


};

export default DisclaimerPage;
