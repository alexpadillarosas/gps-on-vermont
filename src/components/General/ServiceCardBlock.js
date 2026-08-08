import React from "react";
import servicesContent from "../../data/services-content";
import { Row, Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

const ServiceCardBlock = () => {
    const enabledServicesContent = servicesContent.filter((service) => service.enabled);

    return (
        <Row className="service-card-row align-items-stretch">
            {enabledServicesContent.map((item, index) => (
                <Col
                    key={item.id || index}
                    xl="3"
                    lg="3"
                    md="6"
                    className="service-preview-card-col d-flex align-items-stretch mb-4"
                >
                    <ServiceCard service={item} />
                </Col>
            ))}
        </Row>
    );
};

export default ServiceCardBlock;