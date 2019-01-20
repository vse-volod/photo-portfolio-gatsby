import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2em 0 1em 0;
  text-align: center;
`;

const MenuContainer = styled.div`
  a:not(:last-child) {
    margin-right: 10px;
  }
  a {
    color: #8a8a8a;
    text-decoration: none;
  }
  a.active {
    color: #000;
  }
`;

interface HeaderProps {
  siteTitle?: string;
}

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { siteTitle } = this.props;

    return (
      <Wrapper>
        <h2>hello world</h2>
        <MenuContainer>
          <Link to="/" activeClassName="active">
            portfolio
          </Link>
          <Link to="/about/" activeClassName="active">
            about
          </Link>
        </MenuContainer>
      </Wrapper>
    );
  }
}

export default Header;
