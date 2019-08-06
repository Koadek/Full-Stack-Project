import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Seller from './Seller.jsx';
import ItemDetails from './ItemDetails.jsx';
import SellForm from './SellForm.jsx';
import images from './images';
import { Card } from './components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: aliceblue;
`;

const LoginWrapper = styled.div`
  background-image: url(${images[0]});
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border: 10px solid #2b2929;
  background-color: #3e3d40de;
`;

const FormTitle = styled.h1`
  color: wheat;
`;

const Title = styled.h1`
  color: #cacaca;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 4rem;
`;

class UnconnectedApp extends Component {
  componentDidMount = async () => {
    let response = await fetch('/session');
    let responseBody = await response.text();
    console.log('responseBody from session', responseBody);
    let body = JSON.parse(responseBody);
    console.log('parsed body', body);
    if (body.success) {
      this.props.dispatch({
        type: 'login-success',
        username: body.username,
      });
    }
  };

  handleAddItem = item => {
    this.setState({ items: this.props.items.concat(item) });
  };

  renderHome = () => {
    return <Home />;
  };

  renderSeller = routerData => {
    const sellerId = routerData.match.params.sid;
    const seller = this.props.sellers.find(seller => {
      return seller.id === sellerId;
    });
    const sellerItems = this.props.items.filter(
      item => item.sellerId === seller.id
    );
    return <Seller seller={seller} items={sellerItems} />;
  };

  renderItemDetails = routerData => {
    const itemId = routerData.match.params.itemId;
    console.log(routerData);
    return <ItemDetails history={routerData.history} itemId={itemId} />;
  };

  renderSellForm = () => {
    return <SellForm />;
  };

  render = () => {
    if (this.props.lgin) {
      return (
        <BrowserRouter>
          <Wrapper>
            <Navbar />
            <Route path="/" exact render={this.renderHome} />
            <Route
              exact={true}
              path="/seller/:sid"
              render={this.renderSeller}
            />
            <Route
              exact={true}
              path="/details/:itemId"
              render={this.renderItemDetails}
            />
            <Route path="/sellForm" render={this.renderSellForm} />
          </Wrapper>
        </BrowserRouter>
      );
    }
    return (
      <LoginWrapper>
        <Title>Welcome to Monopalibay</Title>
        <LoginForm>
          <FormTitle>Signup</FormTitle>
          <Signup />
          <FormTitle>Login</FormTitle>
          <Login />
        </LoginForm>
      </LoginWrapper>
    );
  };
}
let mapStateToProps = state => {
  return {
    lgin: state.loggedIn,
    items: state.items,
    sellers: state.sellers,
    query: state.query,
  };
};
let App = connect(mapStateToProps)(UnconnectedApp);
export default App;
