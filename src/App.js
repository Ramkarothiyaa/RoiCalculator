import react from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import RoiCalculator from "./Component/RoiCalculator/RoiCalculator"
 
function App(props) {
  return (
      <div className="App">
      <Router>
      <Switch>
    
    <Route path="/roicalculator" component={RoiCalculator} />
    
      </Switch>
    </Router>
      </div>
  );
}

export default App;
