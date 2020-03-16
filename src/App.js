import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from  './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(null, mapDispatchToProps)(App);
