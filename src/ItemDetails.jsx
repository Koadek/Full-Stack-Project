import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Item from './Item.jsx';

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 57px;
  height: 90vh;
`;

const CityImgs = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  overflow: hidden;
`;

const SideImg = styled.div`
  height: 270px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  width: 50%;
  overflow: hidden;
`;

const SmallImg = styled.div`
  overflow: hidden;
  & > img {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 0;
    background: rgb(216, 216, 216);
    contain: strict;
    position: relative;
    z-index: 0;
    border-radius: 3px;

    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    white-space: nowrap;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1);
    transition: transform 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MainImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 0;
  width: 50%;
  height: 270px;
  background: rgb(216, 216, 216);
  contain: strict;
  position: relative;
  z-index: 0;
  border-radius: 3px;
  overflow: hidden;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  white-space: nowrap;
  vertical-align: middle;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  vertical-align: middle;
  padding: 12px 16px;
  display: inline-block;
  color: rgb(72, 72, 72);
  text-decoration: none;
  background-color: aliceblue;
`;

const City = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const Cost = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const CityValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CityBio = styled.div`
  width: 60%;
  margin: 30px;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 286px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RentInfo = styled.div``;

const OtherCities = styled.div`
  display: flex;
`;

class ItemDetails extends Component {
  state = { modalIsOpen: false, carouselIdx: 0 };

  componentDidMount = () => {
    this.updateDataFromServer(this.props.itemId);
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.itemId !== nextProps.itemId) {
      this.updateDataFromServer(nextProps.itemId);
    }
  };

  updateDataFromServer = async itemId => {
    let response = await fetch(`/itemDetails?itemId=${itemId}`);
    let responseBody = await response.text();
    console.log('responseBody from item details', responseBody);
    let body = JSON.parse(responseBody);
    if (!body.success) {
      this.props.history.replace('/');
    }
    console.log('parsed body', body);
    this.setState({
      item: body.item,
      reviews: body.itemReviews,
      seller: body.seller,
      items: body.items,
    });
  };

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
    num = Math.ceil(num);
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  toggleModal = idx => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
      carouselIdx: idx,
    }));
  };

  render() {
    const item = this.state.item;
    if (!item) {
      return 'loading';
    }
    const seller = this.state.seller;
    const items = this.state.items;

    const firstCity = items[Math.floor(Math.random() * items.length)];
    const secondCity = items[Math.floor(Math.random() * items.length)];

    const { modalIsOpen } = this.state;

    return (
      <Wrapper>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel
                currentIndex={this.state.carouselIdx}
                views={item.images.map(img => ({ src: img }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <CityImgs>
          <MainImg onClick={() => this.toggleModal(0)} src={item.images[0]} />
          <SideImg>
            {item.images.slice(1, 5).map((img, idx) => (
              <SmallImg>
                <img onClick={() => this.toggleModal(idx + 1)} src={img} />
              </SmallImg>
            ))}
          </SideImg>
        </CityImgs>
        <CityInfo>
          <TitleWrapper>
            <City>{item.title}</City>
            <div>Seller: {seller.name}</div>
          </TitleWrapper>
          <CityValueWrapper>
            <CityBio>{item.bio}</CityBio>
            <Payment>
              <Cost>{this.formatNumber(item.price)}$</Cost>
              <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_VR905wY5YcZfeGB53NVZkrXg00KftYQTND"
                label="Buy now"
              />
              <div>or</div>
              <div>{this.formatNumber(item.rentPrice)}$ per day</div>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
              {this.state.endDate && (
                  <RentInfo>
                    <div>
                      {this.formatNumber(item.rentPrice)}$ x{' '}
                      {(this.state.endDate - this.state.startDate) / 86400000}{' '}
                      day
                    </div>
                    <Cost>
                      {this.formatNumber(
                        (item.rentPrice *
                          (this.state.endDate - this.state.startDate)) /
                          86400000
                      )}
                      $
                    </Cost>
                  </RentInfo>
                ) && (
                  <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_VR905wY5YcZfeGB53NVZkrXg00KftYQTND"
                    label="Rent now"
                  />
                )}
            </Payment>
          </CityValueWrapper>
        </CityInfo>

        <OtherCities>
          <Item
            cost={firstCity.price}
            sellerId={firstCity.sellerId}
            imagePaths={firstCity.images}
            title={firstCity.title}
            id={firstCity.id}
            bio={firstCity.bio}
          />
          <Item
            cost={secondCity.price}
            sellerId={secondCity.sellerId}
            imagePaths={secondCity.images}
            title={secondCity.title}
            id={secondCity.id}
            bio={secondCity.bio}
          />
        </OtherCities>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews, sellers: state.sellers, items: state.items };
};

export default connect(mapStateToProps)(ItemDetails);
