import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Appointment from './components/customer.components/appointment.components/Customer.appointment.routes';

function App() {

  return (
    <Router>
     <Route path="/appointment" component={Appointment} />
    </Router>
      
  );
}

export default App;
