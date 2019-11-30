import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import { FaFacebook, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-react/views/signupPage.jsx";

import image from "assets/img/demon.jpg";

import { withFirebase } from "../../withFirebase"

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      firebaseInit: false,
      email: '',
      password: '',
    };
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.firebase && this.props.firebase) {
      this.setState({ firebaseInit: true });
    }
    if (this.state.firebaseInit) {
      this.props.firebase.auth().onAuthStateChanged(user => {
        if (user) {
          window.location = '/profile-page'; //After successful login, user will be redirected to home.html
        }
      });
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  googleSignIn() {
    if (this.state.firebaseInit) {
      var provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup(provider).then(function (result) {
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;;
        console.log(errorCode, errorMessage)
      });
    }
  }
  signUp() {
    if (this.state.firebaseInit) {
      let email = this.state.email
      let password = this.state.password
      this.props.firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () { })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });

    }
  }

  onSubmit = () => {
    this.signUp();
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Basket"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h3>Adventure Calls!</h3>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          color="transparent"
                          onClick={e => this.googleSignIn()}
                        >
                          <FaGooglePlusG />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          name: "email",
                          value: this.state.email,
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          name: "password",
                          value: this.state.password,
                          onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Repeat Password"
                        id="pass2"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={this.onSubmit} simple color="primary" size="lg">
                        Register
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withFirebase(withStyles(signupPageStyle)(SignupPage));
