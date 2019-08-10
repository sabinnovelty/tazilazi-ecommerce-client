import React from "react";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import SingInSignUp from "./pages/signin-singnup-page/SignIn-singup.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SingInSignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
