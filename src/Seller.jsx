import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardCenter = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;

class Seller extends Component {
  render() {
    const { seller, items } = this.props;
    return (
      <CardCenter>
        <div>{seller.name}</div>
        <div>{seller.rating}</div>
        <ul>
          {items.map(item => (
            <li>
              <Link to={`/details/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </CardCenter>
    );
  }
}

export default Seller;
