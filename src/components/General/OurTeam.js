import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { deviceType } from "react-device-detect";
import Switch from "react-bootstrap-switch";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import BusinessCardPreview from "./BusinessCardPreview"; 

const OurTeam = ({ staffData }) => {
  const [switchValue, setSwitchValue] = useState(true);

  const MOBILE = "mobile";
  const BROWSER = "browser";
  const TABLET = "tablet";

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 20
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3, 
      slidesToSlide: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 15
    }
  };

  const transitionTiming = "all 0.4s ease-in-out";
  const enabledStaff = staffData.filter(emp => emp.enabled);

  return (
    <Container className="px-0">
      
      {/* Control Block Header */}
      <Row className="align-items-center mb-4 mx-0 pb-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <Col xs="7" sm="6" className="px-0 text-left">
          <div className="d-flex align-items-center">
            <span className="text-muted font-weight-bold mr-2" style={{ fontSize: "0.9rem", userSelect: "none" }}>
              <span role="img" aria-label="clock">⏱️</span> Auto-Advance
            </span>
            <div style={{ transform: "scale(0.85)", transformOrigin: "left center" }}>
              <Switch
                defaultValue={switchValue}
                onChange={(el, state) => setSwitchValue(state)}
                bsSize="normal"
              />
            </div>
          </div>
        </Col>

        <Col xs="5" sm="6" className="px-0 text-right">
          <Link to="/staff-page">
            <Button 
              className="btn-round font-weight-bold shadow-sm px-4" 
              color="info" 
              size="md"
              style={{ textTransform: "none", fontSize: "0.9rem" }}
            >
              View Full Team
            </Button>
          </Link>
        </Col>
      </Row>

      {/* 
        UX Enhancement Wrapper: 
        Added pb-5 (padding-bottom) here to create a dedicated space 
        where the indicator dots can live safely outside the card footprints.
      */}
      <div className="team-carousel-wrapper position-relative pb-5">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          arrows={deviceType !== MOBILE}
          ssr={true}
          infinite={true}
          autoPlay={switchValue && (deviceType === BROWSER || deviceType === TABLET)}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition={transitionTiming}
          transitionDuration={400}
          containerClass="carousel-container overflow-visible"
          deviceType={deviceType}
          
          // --- THE CRITICAL DOT SEPARATION FIXES ---
          renderDotsOutside={true} // Forces the pagination dots to render below the container track instead of floating inside it
          dotListClass="custom-dot-list-style position-absolute w-100 d-flex justify-content-center m-0 p-0"
          style={{ bottom: "0px" }} // Pins them neatly inside our padded container buffer area
          
          itemClass="px-2 pb-3 d-flex align-items-stretch"
          slidesToSlide={1}
        >
          {enabledStaff.map((employee, index) => (
            <div 
              key={index} 
              className="w-100 transition-all h-100 d-flex"
              style={{ transition: "transform 0.2s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <BusinessCardPreview
                emp={employee}
                cardClassName="busines-card h-100 shadow-sm border-0 rounded-lg"
                cardImageClassName="rounded-circle img-fluid img-raised business-card-image-size"
                cardBodyClassName="business-card-body"
              />
            </div>
          ))}
        </Carousel>
      </div>

    </Container>
  );
};

export default OurTeam;
