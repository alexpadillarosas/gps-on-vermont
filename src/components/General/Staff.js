import React from "react";
import { Row, Col } from "reactstrap";
import BusinessCard from "./BusinessCard";

const Staff = ({ staffData, isDoctor }) => {
  if (!staffData) return null;

  return (
    <>
      <Row className="justify-content-center">
        {staffData.filter(emp => emp.enabled && emp.doctor === isDoctor).map((employee, index) => (
          /* Added d-flex align-items-stretch to force equal row tracks natively */
          <Col key={index} md="6" lg="6" xl="6" className="mb-5 d-flex align-items-stretch">
            <BusinessCard 
              emp={employee} 
              cardClassName="w-100 shadow-sm"
              headerClassName="business-card-header" 
              cardBodyClassName="business-card-body-with-header"
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Staff;
