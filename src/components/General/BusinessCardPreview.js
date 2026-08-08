import React from "react";
import IconCheckList from "./IconCheckList";
import IconSocialMediaList from "./IconSocialMediaList";
import { Link } from 'react-router-dom';
import BookingButton from "./BookingButton";
import { Card, CardBody, CardImg, CardHeader, CardTitle, CardText, Badge, CardFooter } from "reactstrap";

const BusinessCardPreview = ({ emp, cardClassName, headerClassName, cardImageClassName, cardBodyClassName }) => {
  let path = emp.image;
  if (!cardImageClassName) cardImageClassName = "rounded-circle img-fluid business-card-image";

  return (
    <Card 
      className={`${cardClassName} d-flex flex-column h-100`} 
      style={{ 
        width: "100%", 
        textTransform: "none",
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
        overflow: "hidden"
      }}
    >
      {/* Visual Accent header track box element strip */}
      <div style={{ height: "8px", backgroundColor: emp.booking ? "#2c7be5" : "#6c757d" }} />
      
      <div className="px-3 w-100 d-flex flex-column h-100">
        <CardHeader className={`${headerClassName} text-center pt-4 pb-2 bg-transparent border-0`}>
          <div style={{ width: "120px", height: "120px" }} className="mx-auto mb-3">
            <CardImg className={cardImageClassName} style={{ border: "4px solid #ffffff", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} alt={emp.name} src={require(`../../assets/img/staff/${path}`)} />
          </div>
          
          <CardTitle tag="h4" className="text-dark font-weight-bold mb-1 mt-0" style={{ fontSize: "1.25rem" }}>
            {emp.name}
          </CardTitle>
          
          <CardText tag="h5" className="text-muted font-weight-bold my-0" style={{ fontSize: "0.9rem" }}>
            {emp.title}
          </CardText>

          {/* Clean Soft Accent Color Language Badges */}
          <div className="spoken-languages d-flex flex-wrap justify-content-center mt-2" style={{ gap: "4px" }}>
            {emp.speaks.map((lang, index) => (
              <Badge key={index} className="px-2 py-1 text-primary border-0" style={{ backgroundColor: "#eef5fc", fontSize: "0.75rem", fontWeight: "700" }}>
                {lang}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardBody className={`${cardBodyClassName} d-flex flex-column pb-1 px-2`}>
          {/* Subtle Background box grouping the bio info and link nodes tightly together */}
          <div className="p-3 mb-3 rounded-lg" style={{ backgroundColor: "#f8f9fa", minHeight: "110px" }}>
            <p className="text-muted text-center mb-1 small" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.5" }}>
              {emp.descriptions}
            </p>
            <div className="text-center mt-2">
              <Link to="/staff-page" className="font-weight-bold small text-primary">
                View Full Bio <i className="ml-1 fa fa-arrow-right small"></i>
              </Link>
            </div>
          </div>

          <div className="accreditations-wrapper mb-2 flex-grow-1" style={{ display: "flex", alignItems: "center" }}>
            <IconCheckList
              list={emp.accreditations}
              className="text-left font-paragraph text-muted small w-100"
              ulClassName="fa-ul mx-auto"
              liClassName="fa-li"
              iconClassName="fa fa-check-circle fa-lg text-success"
            />
          </div>
        </CardBody>

        <CardFooter className="bg-transparent border-0 pt-0 pb-4 mt-auto text-center w-100 px-0">
          <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "48px" }}>
            {emp.booking ? (
              <div className="w-100 shadow-sm rounded-lg overflow-hidden">
                <BookingButton doctorId={emp.bookingDoctorId} size="large" />
              </div>
            ) : (
              <div className="w-100 d-flex justify-content-center align-items-center" style={{ gap: "12px", height: "42px" }}>
                <IconSocialMediaList list={emp.socialMedia} size="md" color="info" target="_blank" rel="noopener noreferrer" />
              </div>
            )}
          </div>
        </CardFooter>

      </div>
    </Card>
  );
};
export default BusinessCardPreview;
