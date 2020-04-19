import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import NavigationBar from "./layouts/NavigationBar";
import Presentation from "./components/Presentation";
import FooterSection from "./layouts/FooterSection";

function App() {
  return (
      <Fragment>
          <NavigationBar/>
          <Presentation/>
          <Layout>
              <Router>
                  <Switch>
                      <Route exact path="/" component={Home} />
                  </Switch>
              </Router>
          </Layout>
          <FooterSection/>
      </Fragment>
  );
}

export default App;
