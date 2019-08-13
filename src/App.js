import React from "react";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import SingInSignUp from "./pages/signin-singnup-page/SignIn-singup.component";
import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/reducers/user/user.actions";
import { connect } from "react-redux";
import { createUserProfileDocument } from "./firebase/firebase.utils";
class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("user auth", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userauth", userAuth);
        userRef.onSnapshot(snapShot => {
          console.log("snapshot", snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SingInSignUp} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
