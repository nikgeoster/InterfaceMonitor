import './App.css';
import './PMT.css';
import '../node_modules/antd/dist/antd.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-sticky-header/styles.css';
import { Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Body from './components/body/body'
import NotFound from './components/notfound';
export const history=createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>           
        <Route exact path="/PMTInterface/" component={Body} />   
        <Route component={NotFound} />    
      </Switch>
    </Router>
  );
}

export default App;
