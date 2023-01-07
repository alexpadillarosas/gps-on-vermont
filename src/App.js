import React from "react";
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";

// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

// pages for this kit
import Index from "./views/Index";
import LandingPage from "./views/examples/LandingPage";
import ContactUsPage from "./views/examples/ContactUsPage";
import ProfilePage from "./views/examples/ProfilePage";
import OurServicesPage from "./views/examples/OurServicesPage";
import PatientInfoPage from "./views/examples/PatientInfoPage";
import StaffPage from "./views/examples/StaffPage";
import FeesPage from "./views/examples/FeesPage";
import AfterHoursPage from "./views/examples/AfterHoursPage";
import AppointmentsPage from "./views/examples/AppointmentsPage";
import FormLinksPage from "./views/examples/FormLinksPage";
import ServiceDetailsPage from "./views/examples/ServiceDetailsPage";
import NotFoundPage from "./views/examples/NotFoundPage";
import ScrollToTop from "./components/General/ScrollToTop";
import NewsDetailsPage from "./views/examples/NewsDetailsPage";
import CareerPage from "./views/examples/CareerPage";
import NewsNavigationPage from "./views/examples/NewsNavigationPage";
import PrivacyPolicyPage from "./views/examples/PrivacyPolicyPage";
import NewsSearchNavigationPage from  "./views/examples/NewsSearchNavigationPage";
import DisclaimerPage from "./views/examples/DisclaimerPage";

// This is to avoid the refresh problems when refreshing the page on github
// https://github.com/rafrex/spa-github-pages

const App = () => {
  console.log("Host URL" + process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        {/* <Route path="/index" render={props => <Index {...props} />} /> */}
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route path="/contact-page" component={ContactUsPage} />
        <Route path="/staff-page" component={StaffPage} />
        <Route path="/services-page" component={OurServicesPage} />
        <Route path="/patientinfo-page" component={PatientInfoPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/fees-page" component={FeesPage} />
        <Route path="/afterhours-page" component={AfterHoursPage} />
        <Route path="/appointments-page" component={AppointmentsPage} />
        <Route path="/formlinks-page" component={FormLinksPage} />
        <Route path="/service-details/:id" component={ServiceDetailsPage} />
        <Route path="/news/id/:pageLink" component={NewsDetailsPage} />
        <Route path="/news-nav" component={NewsNavigationPage} />
        <Route path="/news-search/:range" component={NewsSearchNavigationPage} />
        <Route path="/career-page" component={CareerPage} />
        <Route path="/policy-page" component={PrivacyPolicyPage} />
        <Route path="/disclaimer-page" component={DisclaimerPage} />
        
        <Route component={NotFoundPage} />      </Switch>
    </Router>
  );
};

export default App;
