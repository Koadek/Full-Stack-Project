import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import images from './images';
import { Card } from './components';

const Wrapper = styled.div`
  margin-top: 10px;
  background-image: url(${images[1]});
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

const SellCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border: 10px solid #2b2929;
  background-color: #ccc1aff0;
  height: 450px;
`;

const SellingForm = styled.form`
  display: flex;
  align-items: initial;
  justify-content: space-evenly;
  flex-direction: column;
  height: 500px;
  text-align: left;
`;

const FormField = styled.label`
  display: flex;
  margin: 5px;
`;

const Input = styled.input`
  background-color: #fff;
  border-radius: 5px;
  border-top-color: #999;
  border: 1px solid #bbb;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.18);
  box-sizing: border-box;
  color: #000;
  font-size: 18px;
  padding: 10px 12px;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  margin: 0 20px;
`;

const BioInput = styled.textarea`
  background-color: #fff;
  border-radius: 5px;
  border-top-color: #999;
  border: 1px solid #bbb;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.18);
  box-sizing: border-box;
  color: #000;
  font-size: 18px;
  padding: 10px 12px;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  margin: 0 20px;
`;

const SubmitBtn = styled.input`
  background-color: #fff;
  border-radius: 5px;
  border-top-color: #999;
  border: 1px solid #bbb;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.18);
  box-sizing: border-box;
  color: #000;
  font-size: 18px;
  padding: 10px 12px;
  -webkit-font-smoothing: antialiased;
  margin: 0 20px;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
`;

const Title = styled.h1`
  color: #fff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 4rem;
`;

class SellForm extends Component {
  constructor(props) {
    super(props);
    this.state = { price: 0, images: [], title: '', bio: '' };
  }

  handleTitleChange = evt => {
    this.setState({ title: evt.target.value });
  };

  handleDescriptionChange = evt => {
    this.setState({ bio: evt.target.value });
  };

  handlePriceChange = evt => {
    this.setState({ price: evt.target.value });
  };

  handleImagesChange = evt => {
    this.setState({ images: evt.target.files });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('form submitted');
    let data = new FormData();
    data.append('title', this.state.title);
    data.append('price', this.state.price);
    this.state.images.forEach(img => data.append('images', img));
    data.append('username', this.props.username);
    data.append('bio', this.props.bio);
    fetch('/newCity', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <Wrapper>
        <Title>Sell Your City</Title>
        <SellCard>
          <SellingForm onSubmit={this.handleSubmit} id="sellForm">
            <div>
              <FormField>
                <Input
                  onChange={this.handleTitleChange}
                  value={this.props.description}
                  placeholder="City name"
                />
              </FormField>
            </div>
            <div>
              <FormField>
                <BioInput
                  rows="5"
                  cols="80"
                  onChange={this.handleDescriptionChange}
                  valut={this.props.bio}
                  placeholder="Description"
                />
              </FormField>
            </div>
            <div>
              <FormField>
                <Input
                  onChange={this.handlePriceChange}
                  value={this.props.price}
                  placeholder="Price"
                />
              </FormField>
            </div>
            <div>
              <FormField>
                <Input
                  type="file"
                  multiple
                  onChange={this.handleImagesChange}
                />
              </FormField>
            </div>
            <SubmitBtn type="submit" value="Submit" />
          </SellingForm>
        </SellCard>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
});

export default withRouter(connect(mapStateToProps)(SellForm));
