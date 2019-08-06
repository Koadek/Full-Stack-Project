import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardCenter = styled.div`
  position: absolute;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;
  max-height: 210px;
  display: flex;
  flex-direction: row;
  vertical-align: normal;
  white-space: normal;
  padding-right: 8px;
  box-sizing: border-box;
  color: rgb(72, 72, 72);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-image: initial;
  border-radius: 4px;
  position: relative;
  border-spacing: 0px;
  background-color: white;
`;

const CityImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 0;
  width: 300px;
  height: 200px;
  margin: 5px;
  background: rgb(216, 216, 216);
  contain: strict;
  position: relative;
  z-index: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  white-space: nowrap;
  vertical-align: middle;
`;

const CityInfo = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: middle;
  height: 200px;
  padding: 12px 16px;
  position: relative;
  display: inline-block;
  color: rgb(72, 72, 72);
  text-decoration: none;
`;

const City = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 2rem;
  top: 10px;
  left: 10px;
`;

const Cost = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 2rem;
  top: 10px;
  right: 10px;
`;

const Bio = styled.div`
  position: absolute;
  top: 63px;
`;

const Links = styled(Link)`
  text-decoration: none;
`;

const PayBtn = styled(StripeCheckout)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

class Item extends Component {
  onToken = token => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  formatText(str) {
    if (str.length > 300) str = str.substring(0, 300) + '...';
    return str;
  }

  render() {
    console.log(this.props, 'inside item');
    return (
      <CardCenter>
        <CityImg src={this.props.imageLocation[0]} />
        <CityInfo>
          <City>
            <Links to={'/details/' + this.props.id}>{this.props.title}</Links>
          </City>
          <Cost>{this.formatNumber(this.props.cost)}$</Cost>
          <Bio>{this.formatText(this.props.bio)}</Bio>
          <PayBtn
            token={this.onToken}
            stripeKey="pk_test_VR905wY5YcZfeGB53NVZkrXg00KftYQTND"
            label="Buy now"
          />
        </CityInfo>
      </CardCenter>
    );
  }
}

export default Item;
