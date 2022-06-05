// import React, { useEffect, useState, StyleSheet } from "react";
import React, { useEffect } from "react";

import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
// import { Container } from "reactstrap";
import { UncontrolledCollapse, Table, CardBody, Card } from 'reactstrap';
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
// import {Document, Page} from 'react-pdf';
// import privacyPolicyPdf from '../../assets/docs/GPS-001-PrivacyPolicy.pdf';
// import privacyPolicypdf from '../../assets/img/test.pdf';
// import { getByPlaceholderText } from "@testing-library/react";

const PrivacyPolicyPage = () => {
    const message = "Privacy Policy";

    return (
        <>
          <OtherNavbar />
          <div className="wrapper">
            <LandingPageHeader
            title={message}
            imageClassName={"page-header page-header-xsmall"}
            contentClassName={"content-center-other-pages"}
            titleClassName={"title-small-header"}
            />

            <div style={styles.ContainerStyle} >
                <div style={styles.IntroductionTitleStyle}>Introduction</div>
                <div style={styles.IntroductionStyle}>
                    This privacy policy is to provide information to you, our patient, on how your personal information (which includes your health information) is collected and used within our practice, and the circumstances in which we may share it with third parties.
                </div>







                <div>
                    <btn style={styles.btn} id="Question1">
                        Why and when your consent is necessary?
                    </btn>

                    <UncontrolledCollapse toggler="#Question1">

                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p> When you register as a patient of our practice, you provide consent for our GPs and practice staff to access and use your personal information so they can provide you with the best possible healthcare. Only staff who need to see your personal information will have access to it. If we need to use your information for anything else, we will seek additional consent from you to do this. </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn}  id="Question2" block>
                        Why do we collect, use, hold and share your personal information?
                    </btn>
                    <UncontrolledCollapse toggler="#Question2">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>Our practice will need to collect your personal information to provide healthcare services to you. Our main purpose for collecting, using, holding and sharing your personal information is to manage your health. We also use it for directly related business activities, such as financial claims and payments, practice audits and accreditation, and business processes (e.g. staff training). </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question3">
                    What personal information do we collect?
                    </btn>
                    <UncontrolledCollapse toggler="#Question3">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p> The information we will collect about you includes your: </p>
                                    <p> •	names, date of birth, addresses, contact details </p>
                                    <p> •	medical information including medical history, medications, allergies, adverse events, immunisations, social history, family history and risk factors </p>
                                    <p> •	Medicare number (where available) for identification and claiming purposes </p>
                                    <p> •	healthcare identifiers </p>
                                    <p> •	health fund details.</p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question4">
                    Dealing with us anonymously
                    </btn>
                    <UncontrolledCollapse toggler="#Question4">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>You have the right to deal with us anonymously or under a pseudonym unless it is impracticable for us to do so or unless we are required or authorised by law to only deal with identified individuals. </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question5">
                    How do we collect your personal information?
                    </btn>
                    <UncontrolledCollapse toggler="#Question5">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p> Our practice may collect your personal information in several different ways.</p>
                                    <p>1.	When you make your first appointment our practice staff will collect your personal and demographic information via your registration. </p>
                                    <p>2.	During the course of providing medical services, we may collect further personal information. This may include information obtained through electronic transfer of prescriptions (eTP), My Health Record or Medical Objects secure messaging.</p>
                                    <p>3.	We may also collect your personal information when you visit our website, send us an email or SMS, telephone us, make an online appointment or communicate with us using social media. </p>
                                    <p>4.	In some circumstances personal information may also be collected from other sources. Often this is because it is not practical or reasonable to collect it from you directly. This may include information from:</p>
                                    <p>•	your guardian or responsible person</p>
                                    <p>•	other involved healthcare providers, such as specialists, allied health professionals, hospitals, community health services and pathology and diagnostic imaging services</p>
                                    <p>•	your health fund, Medicare, or the Department of Veterans’ Affairs (as necessary). </p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question6">
                    When, why and with whom do we share your personal information?
                    </btn>
                    <UncontrolledCollapse toggler="#Question6">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>We sometimes share your personal information:</p>
                                    <p>•    with third parties who work with our practice for business purposes, such as accreditation agencies or information technology providers – these third parties are required to comply with APPs and this policy</p>
                                    <p>•    with other healthcare providers</p>
                                    <p>•    when it is required or authorised by law (e.g. court subpoenas)</p>
                                    <p>•    when it is necessary to lessen or prevent a serious threat to a patient’s life, health or safety or public health or safety, or it is impractical to obtain the patient’s consent</p>
                                    <p>•    to assist in locating a missing person</p>
                                    <p>•    to establish, exercise or defend an equitable claim</p>
                                    <p>•    for the purpose of confidential dispute resolution process</p>
                                    <p>•    when there is a statutory requirement to share certain personal information (e.g. some diseases require mandatory notification)</p>
                                    <p>•    during the course of providing medical services, through eTP, My Health Record (e.g. via Shared Health Summary, Event Summary) or through Medical Objects secure messaging.</p>
                                    <p>Only people who need to access your information will be able to do so. Other than in the course of providing medical services or as otherwise described in this policy, our practice will not share personal information with any third party without your consent.</p>
                                    <p>We will not share your personal information with anyone outside Australia (unless under exceptional circumstances that are permitted by law) without your consent.    </p>
                                    <p>Our practice will not use your personal information for marketing any of our goods or services directly to you without your express consent. If you do consent, you may opt out of direct marketing at any time by notifying our practice in writing.    </p>
                                    <p>Our practice may use your personal information to improve the quality of the services we offer to our patients through research and analysis of our patient data.    </p>
                                    <p>We may provide de-identified data to other organisations to improve population health outcomes. The information is secure, patients cannot be identified and the information is stored within Australia. You can let our reception staff know if you do not want your information included.    </p>
                                 </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question7">
                    How do we store and protect your personal information?
                    </btn>
                    <UncontrolledCollapse toggler="#Question7">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>Your personal information may be stored at our practice in various forms. This includes paper records if required and electronic records.</p>
                                    <p>Our practice stores all personal information securely using current and up to date computer security systems with password protection. The clinic is secured using an onsite alarm system and secure locks. All staff members and contractors are also required to sign confidentiality agreements prior to commencing work.</p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question8">
                    How can you access and correct your personal information at our practice?
                    </btn>
                    <UncontrolledCollapse toggler="#Question8">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>You have the right to request access to, and correction of, your personal information.</p>
                                    <p>Our practice acknowledges patients may request access to their medical records. We require you to put this request in writing and our practice will respond within 30 days or another reasonable time discussed with the practice manager. To transfer your records to another practice we charge $22.00 for pensioners and $33.00 for all other patients. This covers the cost of staff time, equipment used and postage to the chosen clinic or practitioner.</p>
                                    <p>Individuals have an enforceable right of access to their health information under the Victorian Health Records Act 2001. The act enables an individual to request health information collected on or after 1 July 2002 in a number of ways. Access can be way of:</p>
                                    <p>•    A printout of information for inspection and opportunity to take notes</p>
                                    <p>•    A provision of a copy of the health information</p>
                                    <p>•    The provision of an accurate summary, instead of a copy, if the organisation and the individual agree that a summary is appropriate</p>
                                    <p>The Health Records Regulations 2002 are the regulations thar currently apply to the fees that can be charged for an individual to access their medical information.</p>
                                    <p><Table bordered responsive style={{ marginBottom: 0}}>
                                            <thead >
                                                <tr>
                                                    <th style={{width:'50%' }}>{['For an organisation to…']}</th>
                                                    <th>{['The maximum fee is…']}</th>
                                                </tr>
                                            </thead>

                                            <thead>
                                                <tr>
                                                    <td >{['Provide a copy of health records to the person (under schedule 1, item 3, a &amp; b)']}</td>
                                                    <td >{['20 cents per page for A4 black &amp; white. Reasonable costs otherwise, including for electronic copies.']}</td>
                                                </tr>
                                            </thead>

                                            <thead>
                                                <tr>
                                                    <td >{['Assess and collate health records to provide the person a copy (under schedule 1, item 3 c)']}</td>
                                                    <td >{['$37.00 (2.5 fee units)']}</td>
                                                </tr>
                                            </thead>

                                            <thead>
                                                <tr>
                                                    <td>{['Post records (under schedule 1, item 3 e)']}</td>
                                                    <td>{['Actual postage cost.']}</td>
                                                </tr>
                                            </thead>

                                        </Table></p>
                                    <p>Our practice will take reasonable steps to correct your personal information where the information is not accurate or up to date. From time to time, we will ask you to verify that your personal information held by our practice is correct and current. You may also request that we correct or update your information, and you should make such requests in writing to the manager at Manager@gpsonvermont.com.au or complete “Update Patient Details Form” which can be provided by reception.</p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>

                <div>
                    <btn style={styles.btn} id="Question9">
                    How can you lodge a privacy-related complaint, and how will the complaint be handled at our practice?
                    </btn>
                    <UncontrolledCollapse toggler="#Question9">
                        <Card>
                            <CardBody>
                                <ul style={styles.LineStyle}>
                                    <p>We take complaints and concerns regarding privacy seriously. You should express any privacy concerns you may have in writing. We will then attempt to resolve it in accordance with our resolution procedure. You can make a complaint to the practice manager by email at Manager@gpsonvermont.com.au, via post to 80 Vermont Street, Wodonga VIC, 3690 or by filling out a “Patient Feedback Form” which can be provided by reception.</p>
                                    <p>You may also contact the OAIC. Generally, the OAIC will require you to give them time to respond before they will investigate. For further information visit www.oaic.gov.au or call the OAIC on 1300 363 992. Alternatively, you can contact the Health Complaints Commissioner on 1300 582 113 or at 26/570 Bourke St, Melbourne VIC 3000.</p>
                                </ul>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                </div>


                <div style={{marginTop: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Policy review statement</div>
                <div style={styles.IntroductionStyle}>
                    This privacy policy will be reviewed regularly to ensure it is in accordance with any changes that may occur. We will notify patients of the change of this information through advertisement on our electronic visual notice board in the waiting room and by writing on our patient consent form.
                </div>

                <div style={styles.SignStyle}>
                    <p style={styles.SignStyleLine}><h style={{fontWeight: 'bold'}}>Document title:</h> GPS 001 Privacy Policy</p>
                    <p style={styles.SignStyleLine}><h style={{fontWeight: 'bold'}}>Reviewed by:</h> Annette Baumgarten – Practice Manager</p>
                    <p style={styles.SignStyleLine}><h style={{fontWeight: 'bold'}}>Version:</h> 2020/001 Effective Date: 16 th January 2020</p>
                    <p style={styles.SignStyleLine}><h style={{fontWeight: 'bold'}}>Next Review Date:</h> 16 th January 2021</p>
                </div>

            </div>
          </div>
          <DarkFooter />
        </>
    );


};


let styles= {

btn:{
    color:'white',
    fontWeight: 'bold',
    fontSize:20,
    backgroundColor: '#4085F4',
    display: 'block',

    marginTop: 20,
    paddingTop:20,
    paddingBottom:20,
    textAlign: 'center',
    width:'100%',
   },

ContainerStyle:{

    marginTop: 100,
    marginBottom: 100,
    marginLeft:'10%',
    width:'80%',

    align: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'justify',

    },
IntroductionTitleStyle:{

    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    // backgroundColor: '#4085F4',
    // color:'white',

},

IntroductionStyle:{

    //fontSize: 20,
    //textAlign: 'justify',
    marginBottom: 50,
    marginLeft:10,
    marginRight:10,
},

LineStyle:{
    fontSize: 17,
    marginRight:40,
},

SignStyle:{
    marginTop: 120,
    marginLeft:10,
    textAlign: 'right',

},

SignStyleLine:{
    marginTop: -18,
    textAlign: 'left',
    fontSize: 10,
},
}

export default PrivacyPolicyPage;
