import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

// styles for this kit
import './assets/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.scss';
import './assets/demo/demo.css';
import './assets/demo/nucleo-icons-page-styles.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

// pages for this kit
import Index from './views/Index'; 
import LandingPage from './views/examples/LandingPage';
import ContactUsPage from './views/examples/ContactUsPage';
import ProfilePage from './views/examples/ProfilePage';
import OurServicesPage from './views/examples/OurServicesPage';
import PatientInfoPage from './views/examples/PatientInfoPage';
import StaffPage from './views/examples/StaffPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path='/landing-page' render={props => <LandingPage {...props} /> } />
        <Route path='/contact-page' component={ContactUsPage} />
        <Route path='/staff-page' component={StaffPage} />
        <Route path='/our-services' component={OurServicesPage} />
        <Route path='/patient-info' component={PatientInfoPage} />
        <Route path='/profile' component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
