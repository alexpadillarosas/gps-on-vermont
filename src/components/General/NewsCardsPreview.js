import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';
import Iframe from "react-iframe";
import BookingButton from './BookingButton';

const NewsCardsPreview = ({ news, start, quantity, bottomComponent }) => {
    const TEXT_SIZE = 100;
    const TITLE_SIZE = 90;

    // const enabledNews = news.filter( emp => emp.enabled );

    function compare(a, b) {
        const dateA = a.date;
        const dateB = b.date;

        let comparison = 0;
        if (dateA > dateB) {
            comparison = 1;
        } else if (dateA < dateB) {
            comparison = -1;
        }
        return comparison * -1;
    }
    let end;
    if (start + quantity > news.length)
        end = undefined;  //important for slice to work
    else
        end = start + quantity;
//.filter( emp => emp.enabled )
    return (
        <>
            <Row >
                {news.sort(compare).slice(start, end).map((item, index) => (

                    <Col key={index} lg={"4"} md="6" className={"ml-auto mr-auto"}>
                        <Card >
                            {item.type==='img'
                                ? 
                                    <CardImg src={require(`../../assets/img/news/${item.img}`)} />
                                : 
                                    <div >
                                        <Iframe
                                            url={item.img}
                                            width="100%"
                                            height="200"
                                            // id="myId23423423222"
                                            title={item.title}
                                            allowFullScreen
                                        />
                                    </div> 
                            }
                            <CardBody style={{ height: 200 }}>
                                <CardTitle tag="h4" className="text-muted text-left business-card-title service-preview-card-body-title" >
                                    {item.title.length > TITLE_SIZE
                                        ? item.title
                                            .substring(0, TITLE_SIZE)
                                            .concat("...")
                                        : item.title
                                    }
                                </CardTitle>
                                <hr></hr>
                                <CardText tag="h5" className="description text-left text-wrap text-truncate" style={{ height: 125 }}>
                                    {item.contents[0].length > TEXT_SIZE
                                        ? item.contents[0]
                                            .substring(0, TEXT_SIZE)
                                            .concat("...")
                                        : item.contents[0]}
                                    {item.displayBookingButton 
                                        ?
                                            <div className="text-center">
                                                {item.displayBookingButtonDrId?.length > 0 
                                                    ?
                                                        <BookingButton doctorId={item.displayBookingButtonDrId} size="large" />
                                                    :
                                                        <BookingButton  size="large" />
                                                }
                                            </div>
                                        :
                                            ""
                                    }
                                    
                                </CardText>
                            </CardBody>

                            {/* <BookingButton className="btn-weight" size="medium" label="Book Appointment with your doctor"/> */}

                            <CardFooter className="d-flex pt-5" tag="h6">
                                {item.contents[0].length > TEXT_SIZE ||
                                    item.contents.length > 1 ?
                                    (
                                        <>
                                            <section className=" mr-auto text-muted mb-2">
                                                <i className=" mr-auto ml-3 pr-1 fa fa-clock "></i>
                                                {item.date}
                                            </section>
                                            <section className=" read-more mr-3 mb-2">
                                                {item.disableReadMore 
                                                    ?
                                                        ""
                                                    :
                                                        <Link to={`/news/id/${item.pageLink}`} >
                                                            Read more
                                                            <i className="ml-2 fa fa-angle-double-right"></i>
                                                        </Link>
                                                }
                                                
                                            </section>
                                        </>
                                    ) :
                                    null
                                }
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
            {bottomComponent}

        </>
    )

}

export default NewsCardsPreview;