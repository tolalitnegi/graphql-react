import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInOut from './pages/sign-in-out/sign-in-out.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      console.log("user is ", user);
      if (user) {
        const userDocRef = await createUserProfileDocument(user);

        userDocRef.onSnapshot(snapshot => {
          console.log(snapshot); // no data only id and exists until .data() is called

          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => { // setState is async
            console.log(this.state);
          });
        })
      }
      else {
        this.setState({
          currentUser: null
        });
      }

    });


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
