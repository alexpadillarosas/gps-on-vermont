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
  Row,
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
  bottomComponent,
}) => {
  const visibleNews = useMemo(() => {
    const sorted = [...news].sort(compareByDateDesc);
    return sorted.slice(start, start + quantity);
  }, [news, start, quantity]);

  return (
    <>
      <style>{`
        .news-card {
          border: 1px solid #eef2f7;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .news-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
          border-color: #dbe6f3;
        }

        .news-card-media {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          border: 0;
          flex-shrink: 0;
        }

        .news-card-iframe {
          width: 100%;
          height: 210px;
          overflow: hidden;
          flex-shrink: 0;
          background: #f8fafc;
        }

        .news-card-iframe iframe {
          width: 100%;
          height: 210px;
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
          font-weight: 600;
          line-height: 1.3;
          color: #55606b;
          margin: 0 0 10px 0;
          min-height: 0;
        }

        .news-card-description {
          font-size: 15px;
          line-height: 1.6;
          color: #7b8590;
          margin: 0;
          min-height: 0;
        }

        .news-card-booking-wrap {
          margin-top: 18px;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 0;
          padding-bottom: 8px;
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
          border-radius: 999px !important;
        }

        .news-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 20px 18px 20px;
          border-top: 1px solid #eef2f7;
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          flex-shrink: 0;
        }

        .news-card-date {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 14px;
          font-weight: 600;
          color: #6b7280;
          white-space: nowrap;
          line-height: 1;
        }

        .news-card-date i {
          font-size: 14px;
          flex-shrink: 0;
          color: #ff6a3d;
        }

        .news-card-read-more {
          font-size: 14px;
          font-weight: 700;
          color: #ff5722;
          text-decoration: none;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #fff4ef;
          border: 1px solid #ffd9cc;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease, color 0.18s ease;
        }

        .news-card-read-more:hover {
          text-decoration: none;
          color: #e64a19;
          background: #ffe9e0;
          border-color: #ffc6b2;
          transform: translateY(-1px);
        }

        .news-card-read-more i {
          margin-left: 0;
          font-size: 14px;
        }

        @media (max-width: 767px) {
          .news-card-media,
          .news-card-iframe,
          .news-card-iframe iframe {
            height: 190px;
          }

          .news-card-body {
            padding: 14px 14px 12px 14px;
          }

          .news-card-title {
            font-size: 17px;
          }

          .news-card-description {
            font-size: 14px;
          }

          .news-card-footer {
            padding: 12px 14px 14px 14px;
            gap: 10px;
          }

          .news-card-date,
          .news-card-read-more {
            font-size: 13px;
          }

          .news-card-read-more {
            padding: 7px 10px;
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
                    height="210"
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