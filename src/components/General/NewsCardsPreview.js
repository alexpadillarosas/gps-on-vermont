import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row
} from "reactstrap";
import Iframe from "react-iframe";
import BookingButton from "./BookingButton";

const TEXT_SIZE = 100;
const TITLE_SIZE = 90;

const truncate = (text = "", max = 100) =>
    text.length > max ? `${text.substring(0, max)}...` : text;

const compareByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

const NewsCardsPreview = ({
    news = [],
    start = 0,
    quantity = 3,
    bottomComponent
}) => {
    const visibleNews = useMemo(() => {
        const sorted = [...news].sort(compareByDateDesc);
        return sorted.slice(start, start + quantity);
    }, [news, start, quantity]);

    return (
        <>
            <style>{`
                .news-card {
                    border: 0;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.10);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .news-card-media {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    display: block;
                    border: 0;
                    flex-shrink: 0;
                }

                .news-card-iframe {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    flex-shrink: 0;
                }

                .news-card-iframe iframe {
                    width: 100%;
                    height: 200px;
                    border: 0;
                    display: block;
                }

                .news-card-body {
                    padding: 16px 18px 12px 18px;
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                }

                .news-card-title {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.28;
                    color: #6a717a;
                    margin: 0 0 12px 0;
                    min-height: 48px;
                }

                .news-card-description {
                    font-size: 16px;
                    line-height: 1.55;
                    color: #79828c;
                    margin: 0;
                    min-height: 78px;
                }

                .news-card-booking-wrap {
                    margin-top: auto;
                    min-height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 16px;
                    padding-bottom: 6px;
                }

                .news-card-booking-wrap.empty {
                    visibility: hidden;
                }

                .news-card-booking-wrap a[data-hotdoc-button] {
                    min-width: 220px !important;
                    min-height: 44px !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    padding: 0 18px !important;
                    margin: 0 !important;
                    font-size: 16px !important;
                    font-weight: 600 !important;
                    white-space: nowrap;
                }

                .news-card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;

                    /* top | right | bottom | left */
                    padding: 16px 28px 22px 28px;

                    border-top: 0;
                    background: #fff;
                    flex-shrink: 0;
                }

                .news-card-date {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #6c757d;
                    white-space: nowrap;
                }

                .news-card-date i {
                    font-size: 15px;
                    flex-shrink: 0;
                }

                .news-card-read-more {
                    font-size: 15px;
                    font-weight: 600;
                    color: #ff5722;
                    text-decoration: none;
                    white-space: nowrap;
                    display: inline-flex;
                    align-items: center;
                }

                .news-card-read-more:hover {
                    text-decoration: underline;
                    color: #e64a19;
                }

                .news-card-read-more i {
                    margin-left: 6px;
                }

                @media (max-width: 767px) {
                    .news-card-body {
                        padding: 14px 16px 10px 16px;
                    }

                    .news-card-footer {
                        padding: 14px 16px 16px 16px;
                    }

                    .news-card-date,
                    .news-card-read-more {
                        font-size: 14px;
                    }
                }
            `}</style>

            <Row className="align-items-stretch">
                {visibleNews.map((item) => (
                    <Col
                        key={item.id ?? `${item.pageLink}-${item.date}`}
                        lg="4"
                        md="6"
                        className="mb-4 d-flex align-items-stretch"
                    >
                        <Card className="news-card w-100">
                            {item.type === "img" ? (
                                <CardImg
                                    top
                                    src={require(`../../assets/img/news/${item.img}`)}
                                    alt={item.title}
                                    className="news-card-media"
                                />
                            ) : (
                                <div className="news-card-iframe">
                                    <Iframe
                                        url={item.img}
                                        width="100%"
                                        height="200"
                                        title={item.title}
                                        allowFullScreen
                                    />
                                </div>
                            )}

                            <CardBody className="news-card-body">
                                <CardTitle tag="h5" className="news-card-title">
                                    {truncate(item.title, TITLE_SIZE)}
                                </CardTitle>

                                <CardText className="news-card-description">
                                    {truncate(item.contents?.[0] ?? "", TEXT_SIZE)}
                                </CardText>

                                <div
                                    className={`news-card-booking-wrap ${
                                        item.displayBookingButton ? "" : "empty"
                                    }`}
                                >
                                    {item.displayBookingButton ? (
                                        <BookingButton
                                            doctorId={item.displayBookingButtonDrId}
                                            label="Book Appointment"
                                        />
                                    ) : (
                                        <span>Book Appointment</span>
                                    )}
                                </div>
                            </CardBody>

                            <CardFooter className="news-card-footer">
                                <div className="news-card-date">
                                    <i className="fa fa-clock" />
                                    <span>{item.date}</span>
                                </div>

                                {!item.disableReadMore && (
                                    <Link
                                        to={`/news/id/${item.pageLink}`}
                                        className="news-card-read-more"
                                    >
                                        Read more
                                        <i className="fa fa-angle-double-right" />
                                    </Link>
                                )}
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>

            {bottomComponent}
        </>
    );
};

export default NewsCardsPreview;