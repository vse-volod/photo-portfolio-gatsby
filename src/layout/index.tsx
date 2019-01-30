import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 75px;
  div:hover {
    filter: brightness(65.5%);
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }
`;

interface LayoutProps {
  className?: string;
  children: any;
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export default class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => {
          const { siteMetadata } = data.site;
          const { children } = this.props;

          return (
            <React.Fragment>
              <Helmet
                title={siteMetadata.title}
                meta={[
                  {
                    name: 'description',
                    content: 'Julia Photo Portfolio',
                  },
                  { name: 'keywords', content: 'Photo, Instagram' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header siteTitle={siteMetadata.title} />
              <LayoutWrapper>{children}</LayoutWrapper>
            </React.Fragment>
          );
        }}
      />
    );
  }
}
