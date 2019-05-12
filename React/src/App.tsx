import * as React from 'react';
import './Styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Materials from './Components/Materials';
import Providers from './Components/Providers';
// import PurchaseTransactons from './Components/PurchaseTransactions';
import * as Consts from './Utils/Consts';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path={Consts.Routes.Home} exact={true} component={Home} />
            <Route path={Consts.Routes.Materials} component={Materials} />
            <Route path={Consts.Routes.Providers} component={Providers} />
            {/* <Route path={Consts.Routes.PurchaseTransactons} component={PurchaseTransactons} /> */}
            <Route path={Consts.Routes.NotFound} component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
