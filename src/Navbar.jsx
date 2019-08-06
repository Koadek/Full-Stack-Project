import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { mediaSizes } from './globals';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  color: #fff;
  position: fixed;
  height: 60px;
  background-color: #3a3633;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Logo = styled(Link)`
  color: #fff;
  margin-left: 25px;
  line-height: 0;
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: #fff;
  margin: 0;
  font-size: 1rem;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  transition: opacity 0.2s ease-in-out;
  &::after {
    content: '';
    background: #fff;
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const NavButton = styled.button`
  text-decoration: none;
  position: relative;
  color: #fff;
  margin: 0;
  font-size: 1rem;
  border: 0;
  font-family: 'Poppins', sans-serif;
  transition: opacity 0.2s ease-in-out;
  background: #3a3633;
  &:focus {
    outline: 0;
  }
  &::after {
    content: '';
    background: #fff;
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    cursor: pointer;
  }
`;

const SearchBar = styled.input`
  font-size: 18px;
  margin: 10px;
  padding: 10px;
  border-radius: var(--border-radius);
  border: none;
  display: none;
  @media (min-width: ${mediaSizes.sm}) {
    display: block;
  }
`;

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Navbar({ query, handleQueryChange, setLogout }) {
  return (
    <Wrapper>
      <Logo to="/">
        <h1>Monopalibay</h1>
      </Logo>
      <SearchBar
        type="text"
        onChange={handleQueryChange}
        value={query}
        placeholder="Which city should you own next?"
      />
      <NavLinks>
        <NavButton onClick={topFunction}>Top</NavButton>
        <NavLink to="/sellForm">Sell your city</NavLink>
        <NavButton onClick={setLogout}>Logout</NavButton>
      </NavLinks>
    </Wrapper>
  );
}

function handleLogout(dispatch) {
  fetch('/logout', { method: 'POST', credentials: 'same-origin' });
  dispatch({
    type: 'logout',
  });
}

const mapStateToProps = state => ({
  query: state.query,
  lgin: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  handleQueryChange: evt =>
    dispatch({ type: 'SET_QUERY', query: evt.target.value }),
  setLogout: () => handleLogout(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
