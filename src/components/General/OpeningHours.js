import React from "react";
import { Card, CardHeader, CardFooter, CardBody, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
const OpeningHours = () => {
  return (
    <>
      <Card className="card-data">
        <CardHeader className="card-header">
          <i className="fa fa-clock fa-lg fa-icon-card-header"></i>
          Opening Hours Christmas holiday season
        </CardHeader>
        <CardBody className="card-body" style={{ height: 300 }}>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Monday</div>
            <div className="float-right">8:00 am to 5:20 pm</div>
          </CardTitle>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Tuesday</div>
            <div className="float-right">8:00 am to 5:20 pm</div>
          </CardTitle>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Wednesday</div>
            <div className="float-right">8:00 am to 5:20 pm</div>
          </CardTitle>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Thursday</div>
            <div className="float-right">8:00 am to 5:20 pm</div>
          </CardTitle>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Friday</div>
            <div className="float-right">8:00 am to 5:20 pm</div>
          </CardTitle>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Saturday</div>
            <div className="float-right">9:00 am to 12:30 pm</div>
          </CardTitle>
          <CardTitle tag="h5" className=" clearfix card-content-title">
            <div className="float-left">Sunday</div>
            <div className="float-right">closed</div>
          </CardTitle>
        </CardBody>
        <CardFooter className="card-footer-padding">
          <div className="text-justified">
            <i
              className="fa fa-info-circle fa-lg"
              style={{ marginRight: 10 }}
            ></i>
            <Link className="text-info"  to="/afterhours-page">Check after hours care</Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default OpeningHours;
