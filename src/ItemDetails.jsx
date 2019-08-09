import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 57px;
  height: 100vh;
`;

const CityImgs = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  overflow: hidden;
`;

const SideImg = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  width: 50%;
  overflow: hidden;
`;

const SmallImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 0;
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
`;

const MainImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 0;
  width: 50%;
  height: 300px;
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
  margin: 5px 0 10px;
`;

const CityBio = styled.div`
  width: 50%;
  margin: 30px;
  padding: 15px;
  background-color: #e6e6e6;
  border: 1px solid black;
  border-radius: 2.5px;
`;

const Info = styled.div`
  display: flex;
`;

const Reviews = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  border: solid 1px black;
  padding: 30px;
  border-radius: 2.5px;
  background-color: #e7fbe7;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 286px;
`;

const RentInfo = styled.div``;

class ItemDetails extends Component {
  state = { modalIsOpen: false, carouselIdx: 0 };

  componentDidMount = async () => {
    let response = await fetch(`/itemDetails?itemId=${this.props.itemId}`);
    let responseBody = await response.text();
    console.log('responseBody from item details', responseBody);
    let body = JSON.parse(responseBody);
    if (!body.success) {
      this.props.history.replace('/');
    }
    console.log('parsed body', body);
    this.setState({ item: body.item, reviews: body.itemReviews });
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

    console.log(item);
    const reviews = this.state.reviews;

    const filteredReviews = item.reviews.map(reviewId =>
      reviews.find(review => review.id === reviewId)
    );

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
              <SmallImg onClick={() => this.toggleModal(idx + 1)} src={img} />
            ))}
          </SideImg>
        </CityImgs>
        <CityInfo>
          <City>{item.title}</City>
          <CityValueWrapper>
            <Info>
              <CityBio>{item.bio}</CityBio>
              {reviews.length > 0 && (
                <Reviews>
                  {reviews.length > 0 && <div>Reviews:</div>}
                  <ul>
                    {filteredReviews.map(review => (
                      <li>
                        {review.content} -{review.reviewer}
                      </li>
                    ))}
                  </ul>
                </Reviews>
              )}
            </Info>
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
              <RentInfo>
                <div>
                  {this.formatNumber(item.rentPrice)}$ x{' '}
                  {(this.state.endDate - this.state.startDate) / 86400000} day
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
              <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_VR905wY5YcZfeGB53NVZkrXg00KftYQTND"
                label="Rent now"
              />
            </Payment>
          </CityValueWrapper>
        </CityInfo>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews };
};

export default connect(mapStateToProps)(ItemDetails);
