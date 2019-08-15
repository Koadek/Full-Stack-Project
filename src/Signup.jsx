import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormField = styled.div`
  margin: 5px;
  color: wheat;
`;

const Form = styled.form`
  display: flex;
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
  margin: 5px;
`;

const SubmitBtn = styled.input`
  margin: auto;
  border-radius: var(--border-radius);
  cursor: pointer;
  border: none;
  font-size: 1rem;
  outline: none;
  text-decoration: none;
  display: none;
`;

class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleUsernameChange = event => {
    console.log('new username', event.target.value);
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    console.log('new password', event.target.value);
    this.setState({ password: event.target.value });
  };
  handleSubmit = async evt => {
    evt.preventDefault();
    console.log('signup form submitted');
    let data = new FormData();
    data.append('username', this.state.username);
    data.append('password', this.state.password);
    let response = await fetch('/signup', { method: 'POST', body: data });
    let responseBody = await response.text();
    console.log('responseBody from signup', responseBody);
    let body = JSON.parse(responseBody);
    console.log('parsed body', body);
    if (!body.success) {
      alert(body.msg);
      return;
    }
    this.props.dispatch({ type: 'login-success', username: body.username });
  };

  render = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField>
          <Input
            type="text"
            onChange={this.handleUsernameChange}
            placeholder="Username"
          />
        </FormField>
        <FormField>
          <Input
            type="password"
            onChange={this.handlePasswordChange}
            placeholder="Password"
          />
        </FormField>
        <SubmitBtn type="submit" value="Submit" />
      </Form>
    );
  };
}
let Signup = connect()(UnconnectedSignup);
export default Signup;
