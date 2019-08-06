import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item.jsx';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 210px;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  grid-gap: 2px;
`;

class Home extends Component {
  componentDidMount() {
    this.updateHome();
  }

  updateHome = async () => {
    const response = await fetch('/home');
    const body = await response.json();
    if (body.success) {
      return this.props.dispatch({
        type: 'SET_HOME',
        items: body.items,
        sellers: body.sellers,
        reviews: body.reviews,
      });
    }
    this.props.dispatch({ type: 'logout' });
  };

  render() {
    const searchResults = this.props.items.filter(item =>
      item.title.toLowerCase().includes(this.props.query.toLowerCase())
    );
    return (
      <Wrapper>
        {searchResults.map(item => (
          <Item
            cost={item.price}
            sellerId={item.sellerId}
            imagePaths={item.images}
            title={item.title}
            id={item.id}
            bio={item.bio}
          />
        ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items, query: state.query };
};
export default connect(mapStateToProps)(Home);
