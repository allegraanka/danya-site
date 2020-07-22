import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import AuthPage from './pages/auth-page/auth-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // store current user on our redux using the snapshot data from firebase of that user record
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/sign-in' render={() => 
            this.props.currentUser ? (
                <Redirect to='/shop'/> 
              ) : (
                <AuthPage />
              )
            }
          />
          <Route exact path='/sign-up' component={SignUpPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
