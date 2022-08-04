import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


const backImage = "gpv-opening-hours.jpg";

const OpeningHours2 = () => {
    return (
        <>
            <Card inverse  >
                <CardImg height="350"  src={require(`../../assets/img/${backImage}`)} alt={backImage} />
                <CardImgOverlay>
                    <CardTitle tag="h5" className=" clearfix opening-hours pt-4">
                        <div className="float-left">Monday</div>
                        <div className="float-right">7:45 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Tuesday</div>
                        <div className="float-right">7:45 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Wednesday</div>
                        <div className="float-right">7:45 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Thursday</div>
                        <div className="float-right">7:45 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Friday</div>
                        <div className="float-right">7:45 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Saturday</div>
                        <div className="float-right">9:00 am to 4:00 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Sunday</div>
                        <div className="float-right">closed</div>
                    </CardTitle>
                    <CardFooter className="card-footer-padding" >
                        <div className="text-center">
                            <i
                                className="fa fa-info-circle fa-lg"
                                style={{ marginRight: 10 }}
                            ></i>
                            <Link style={{fontSize: 18}} className="text-primary font-weight-bolder" to="/afterhours-page">Check after hours care</Link>
                        </div>
                    </CardFooter>
                </CardImgOverlay>
            </Card>
        </>
    )
}

export default OpeningHours2;