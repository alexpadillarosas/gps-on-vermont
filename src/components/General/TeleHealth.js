import React from 'react';
import { Card, CardFooter, CardImg, CardImgOverlay, CardTitle, Row, Col } from 'reactstrap';
import BookingButton from './BookingButton';

const backImage = "gpv-telehealth-service.jpg";

const TeleHealth = () => {
    return (
        <>
            <Card inverse  >
                <CardImg height="350" src={require(`../../assets/img/${backImage}`)} alt={backImage} />
                <CardImgOverlay style={{ backgroundColor: "#0000001a" }}>
                    <CardTitle tag="h3" className=" text-center ad-card-title " >
                        <div className=" font-weight-bolder telehealth-header" >
                            Make an appointment and call us
                        </div>
                    </CardTitle>
                    <CardFooter className=" telehealth-footer" >
                        <Row className="text-center">
                            <Col>
                                <BookingButton className="btn-weight" size="medium" label="Book Appointment with your doctor"/>
                            </Col>
                        </Row>
                    </CardFooter>
                </CardImgOverlay>
            </Card>
        </>
    )
}

export default TeleHealth;