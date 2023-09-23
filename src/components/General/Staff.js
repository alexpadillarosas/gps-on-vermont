import React from "react";
import { Row, Col } from "reactstrap";
import BusinessCard from "./BusinessCard";

const Staff = ({ staffData, isDoctor }) => {
  if (!staffData) return null;
  // if (!isDoctor) return null;
  return (
    <>
      <Row>
        {staffData.filter(emp => emp.enabled && emp.doctor===isDoctor ).map((employee, index) => (
          <Col key={index} md="6" lg="6" xl="6" >
            <BusinessCard emp={employee} headerClassName={"business-card-header"} cardBodyClassName={"business-card-body-with-header"}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Staff;
