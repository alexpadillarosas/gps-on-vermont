import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Media,
  Row,
  Container,
} from "reactstrap";
import jobOffers from "../../data/job-offers";

const TEXT_SIZE = 150;

const News = ({ news = [] }) => {
  const safeNews = Array.isArray(news) ? news : [];
  const tot = safeNews.length;

  const headerComponent = (comp) => {
    const hasEnabledJobs = Array.isArray(jobOffers) && jobOffers.some((job) => job.enabled);
    if (hasEnabledJobs) {
      return (
        <>
          <div className="news-header-badge">Now Hiring</div>
          {comp}
        </>
      );
    }
    return comp;
  };

  const header = <h2 className="news-page-title">Latest News</h2>;

  return (
    <>
      <style>{`
        .news-page-wrap {
          padding: 24px 0 40px;
        }

        .news-page-title {
          margin: 0 0 18px;
          font-size: 34px;
          font-weight: 700;
          color: #2f3136;
        }

        .news-header-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          padding: 6px 12px;
          border-radius: 999px;
          background: #fff4ef;
          color: #ff5722;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .news-list-card {
          border: 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
          background: #ffffff;
        }

        .news-content {
          padding: 18px;
          border-bottom: 1px solid #eef2f7;
        }

        .news-content:last-child {
          border-bottom: 0;
        }

        .image-details {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
        }

        .media-title {
          margin-bottom: 10px;
          font-size: 22px;
          font-weight: 700;
          color: #334155;
        }

        .preview-content {
          margin-bottom: 14px;
          color: #6b7280;
          font-size: 15px;
          line-height: 1.7;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #fff4ef;
          border: 1px solid #ffd9cc;
          color: #ff5722;
          font-size: 14px;
          font-weight: 800;
        }

        .read-more:hover {
          text-decoration: none;
          background: #ffe9e0;
          border-color: #ffc6b2;
          color: #e64a19;
        }

        .card-footer-padding {
          padding: 14px 18px 18px;
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
        }

        @media (max-width: 767px) {
          .news-page-title {
            font-size: 28px;
          }

          .media-title {
            font-size: 18px;
          }

          .image-details {
            height: 190px;
            margin-bottom: 14px;
          }
        }
      `}</style>

      <Container className="news-page-wrap">
        {headerComponent(header)}

        <Card className="news-list-card">
          <CardBody className="overflow-vertical scrollbar-ripe-malinka">
            <Row>
              {safeNews.map((item, index) => (
                <Col key={index} sm="12" className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Media className="news-content">
                      <Row>
                        <Col sm="12" md="5">
                          <Media
                            className="mr-3 image-details"
                            object
                            src={require(`../../assets/img/${item.img}`)}
                            alt={item.title}
                          />
                        </Col>

                        <Col sm="12" md="7">
                          <Media body>
                            <Media heading className="media-title card-title">
                              {item.title}
                            </Media>

                            <p className="preview-content">
                              {item?.contents?.[0]?.length > TEXT_SIZE
                                ? item.contents[0].substring(0, TEXT_SIZE).concat("...")
                                : item?.contents?.[0] || ""}
                            </p>

                            {item?.contents?.[0]?.length > TEXT_SIZE ||
                            (Array.isArray(item?.contents) && item.contents.length > 1) ? (
                              <Link to={`/news/id/${item.pageLink}`}>
                                <div className="read-more">Read more</div>
                              </Link>
                            ) : null}
                          </Media>
                        </Col>
                      </Row>
                    </Media>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardBody>

          <CardFooter className="card-footer-padding">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div className="text-justified">
                <i
                  className="fa fa-info-circle fa-lg"
                  style={{ marginRight: 10 }}
                />
                {tot > 0 ? `Total: ${tot} news` : "No news"}
              </div>

              <div>
                <Link className="text-info" to="/news/all">
                  View All
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
};

export default News;