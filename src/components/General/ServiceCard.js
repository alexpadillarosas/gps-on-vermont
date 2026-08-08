import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, className: passedClasses }) => {
    const path = service.image;

    const buttonClasses = [
        passedClasses || "font-paragraph",
        "service-card-button"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            <style>{`
                .service-card {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    border-radius: 18px;
                    overflow: hidden;
                    background: #ffffff;
                    box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .service-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
                }

                .service-card-image-wrapper {
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    min-height: 165px;
                    max-height: 185px;
                    overflow: hidden;
                    background: linear-gradient(135deg, #eef7fb 0%, #e6f1ff 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin: 0;
                    padding: 0;
                }

                .service-card-image {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: contain;
                    display: block;
                    margin: 0;
                    padding: 12px;
                }

                .service-card-body {
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                    padding: 14px 18px 16px;
                }

                .service-card-title {
                    margin: 0 0 6px 0;
                    color: #5f6b78;
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.25;
                    min-height: 40px;
                }

                .service-card-description {
                    margin: 0;
                    color: #7a8390;
                    font-size: 15px;
                    line-height: 1.55;
                    min-height: 48px;
                }

                .service-card-button-wrapper {
                    margin-top: auto;
                    padding-top: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }

                .service-card-button {
                    min-width: 145px;
                    padding: 9px 18px;
                    border-radius: 999px;
                    font-weight: 600;
                    box-shadow: 0 6px 14px rgba(44, 168, 255, 0.16);
                }

                .service-card-button:hover {
                    box-shadow: 0 8px 18px rgba(44, 168, 255, 0.22);
                }

                @media (max-width: 991px) {
                    .service-card-image-wrapper {
                        min-height: 155px;
                        max-height: 175px;
                    }

                    .service-card-title {
                        min-height: 0;
                    }

                    .service-card-description {
                        min-height: 42px;
                    }
                }

                @media (max-width: 767px) {
                    .service-card-body {
                        padding: 14px 16px 16px;
                    }

                    .service-card-image-wrapper {
                        min-height: 150px;
                        max-height: 170px;
                    }

                    .service-card-image {
                        padding: 10px;
                    }

                    .service-card-title {
                        min-height: 0;
                    }

                    .service-card-description {
                        min-height: 0;
                    }

                    .service-card-button-wrapper {
                        padding-top: 6px;
                    }
                }
            `}</style>

            <Card className="service-card">
                <div className="service-card-image-wrapper">
                    <CardImg
                        className="service-card-image"
                        alt={service.title}
                        src={require(`../../assets/img/services/${path}`)}
                        top
                    />
                </div>

                <CardBody className="service-card-body">
                    <CardTitle tag="h5" className="service-card-title">
                        {service.title}
                    </CardTitle>

                    <CardText className="category text-primary service-card-description">
                        {service.shortIntro}
                    </CardText>

                    <div className="service-card-button-wrapper">
                        <Link to={`/service-details/${service.id}`}>
                            <Button color="info" className={buttonClasses}>
                                More Details
                            </Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default ServiceCard;