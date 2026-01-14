import React from 'react'
import { Row, Col } from 'reactstrap';
import SmartLinkifier from './SmartLinkifier';
import SocialMediaShareBar from './SocialMediaShareBar';
import Iframe from "react-iframe";

const NewsDetail = ({ article }) => {
    
    let link = "id/" + article.pageLink;
    const mediaList = ["facebook","twitter","whatsapp","reddit","linkedin","email"];

    return (
        <>
            <div className="article">
                <Row>
                    <Col md="4" xl="4">
                        {article.type==='img'
                            ?
                                <div className="justify-content-center">
                                    <img className="img-fluid" width={"150%"} src={require(`../../assets/img/news/${article.img}`)} alt={article.title} />
                                </div>
                            :
                                <div >
                                    <Iframe
                                        url={article.img}
                                        width="100%"
                                        height="200"
                                        // id="myId23423423222"
                                        title={article.title}
                                        allowFullScreen
                                    />
                                </div> 
                        }
                    </Col>
                    <Col className="d-flex flex-column" md="8" xl="8">
                        <h3 className=" text-capitalize sub-title">
                            {article.title}
                        </h3>
                        <h5 className="description text-left">
                            {article.contents[0]}
                        </h5>
                    </Col>
                </Row>
                <h1>{""}</h1>
                {article.contents.map((paragraph, index) => index > 0 ? (<h5 key={index} className="description text-left">
                    <SmartLinkifier text={paragraph} />
                </h5>) : null)}
                <SocialMediaShareBar shareUrl={link} title={article.title} description={article.contents[0]} media={mediaList} />
            </div>
        </>
    )

}

export default NewsDetail;