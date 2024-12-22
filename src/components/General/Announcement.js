import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import { Card, CardFooter, CardImg, CardImgOverlay, CardTitle, Button } from 'reactstrap';
// import BookingButton from './BookingButton';
// import SocialMediaShareBar from './SocialMediaShareBar';


const backImage = "gpv-opening-hours.jpg";

const Announcement = () => {
    return (
        <>
            <Card inverse  >
                <CardImg height="350" src={require(`../../assets/img/${backImage}`)} alt={backImage} />
                <CardImgOverlay style={{ backgroundColor: "#3f4144a6" }}>

                    {/* <CardTitle tag="h2" className=" text-center ad-card-title">
                        <div className=" font-weight-bolder " >
                            Holiday Hours
                        </div>
                    </CardTitle> */}

                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Christmas Eve</div>
                        <div className="float-right">8:00 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Christmas Day</div>
                        <div className="float-right">CLOSED</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">Boxing Day</div>
                        <div className="float-right">CLOSED</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">27 Dec</div>
                        <div className="float-right">8:00 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">28 Dec</div>
                        <div className="float-right">CLOSED</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">29 Dec</div>
                        <div className="float-right">CLOSED</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">30 Dec</div>
                        <div className="float-right">8:00 am to 5:30 pm</div>
                    </CardTitle>
                    <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">New Year's Eve</div>
                        <div className="float-right">8:00 am to 5:30 pm</div>
                    </CardTitle><CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">New Year's Day</div>
                        <div className="float-right">CLOSED</div>
                    </CardTitle>
                    {/* <CardTitle tag="h5" className=" clearfix opening-hours">
                        <div className="float-left">02 Jan</div>
                        <div className="float-right">CLOSED</div>
                    </CardTitle> */}

                </CardImgOverlay>
            </Card>
        </>
    )
}


 


export default Announcement;


// <CardTitle tag="h3" className=" text-center pt-2 ad-card-title">
//<div className=" font-weight-bolder " >
//    Border Closure Travel Permit Application
//</div>
//</CardTitle>
//{/* <CardTitle tag="h4" className="pb-1 text-center">
//Follow these steps
//</CardTitle> */}
//<CardTitle tag="h5" className=" clearfix opening-hours">
//<div className="float-left">1) What do you need to know</div>
//<div className="float-right">
//    <Button
//        className={"btn-weight"}
//        color={"info"}
//        size={"sm"}
//        href={`https://www.service.nsw.gov.au/transaction/apply-covid-19-nsw-border-entry-permit`}
//        // onClick={e => e.preventDefault()}
//    >
//        Related information
//    </Button>
//</div>
//</CardTitle>
//<CardTitle tag="h5" className=" clearfix opening-hours">
//<div className="float-left">2) Book an appointment</div>
//<div className="float-right"><BookingButton className="btn-weight" size="sm" /></div>
//</CardTitle>
//<CardTitle tag="h5" className=" clearfix opening-hours">
//<div className="float-left">3) Apply here</div>
//<div className="float-right">
//<Button
//    className={"btn-weight"}
//    color={"danger"}
//    size={"sm"}
//    href={`https://disasterassistance.service.nsw.gov.au/bcpermit`}
//    // onClick={e => e.preventDefault()}
//>
//    Permit Application
//</Button>
//</div>
//</CardTitle>





//<CardTitle tag="h3" className=" text-center pt-2 ad-card-title">
//<div className=" font-weight-bolder " >
//    Easter Opening Hours
//</div>
//</CardTitle>
//<CardTitle tag="h4" className="pb-1 text-center">
//GPs on Vermont will be opened over Easter
//</CardTitle>
//<CardTitle tag="h5" className=" clearfix opening-hours">
//<div className="float-left">Good Friday</div>
//<div className="float-right">8:00 am to 5:20 pm</div>
//</CardTitle>
//<CardTitle tag="h5" className=" clearfix opening-hours">
//<div className="float-left">Saturday</div>
//<div className="float-right">9:00 am to 4:20 pm</div>
//</CardTitle>
//<CardTitle tag="h5" className=" clearfix opening-hours">
//<div className="float-left">Monday</div>
//<div className="float-right">8:00 am to 5:20 pm</div>
//</CardTitle>

//<CardFooter className="card-footer-padding" >
//<div className="text-center">
//    <BookingButton />
//    {/* <SocialMediaShareBar shareUrl={""} title={"GPs on Vermont will be opened over Easter!        Good Friday   8:00 am to 5:20 pm        Saturday    9:00 am to 12:30 pm         Monday  8:00 am to 5:20 pm"} description={"GPs on Vermont will be opened over Easter"} media={["facebook"]}/> */}
//</div>
//</CardFooter>

