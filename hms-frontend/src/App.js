import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './components/staff.components/admin.components/Login';
import Admin from './components/staff.components/admin.components/Admin';







function App() {
  return (


    <Router>
      <div>
        <Switch>
          <Route path="/staff/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
