import React, { useEffect } from 'react'
import OtherNavbar from '../../components/NavBars/OtherNavbar';
import LandingPageHeader from '../../components/Headers/LandingPageHeader';
import BookingButton from '../../components/General/BookingButton';
import { Container } from 'reactstrap';
import NewsCardsPreviewPagination from '../../components/General/NewsCardsPreviewPagination';
import DarkFooter from '../../components/Footers/DarkFooter';
import BackButton from '../../components/General/BackButton';


const NewsNavigationPage = ( ) => {
    // const idFound = match.params.range;

    return (
        <>
            <OtherNavbar />
            <div className="wrapper">
                <LandingPageHeader
                    title={<BookingButton className="btn-weight" size="large" />}
                    imageClassName={"page-header page-header-xsmall"}
                    contentClassName={"content-center-other-pages"}
                    titleClassName={"title-small-header"}
                />
                <div className="section text-center" >
                    <BackButton children={"Go Back"} className="btn-round our-services-go-back-button" />
                    <Container className="text-muted">

                        <NewsCardsPreviewPagination itemsPerPage={9}  />
                    </Container>
                </div>
            </div>
            <DarkFooter />
        </>
    );

};

export default NewsNavigationPage;
