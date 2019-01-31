import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

export default ({ data }: any) => {
  return (
    <Layout>
      <SEO />
      <Gallery
        itemsPerRow={[2, 3]}
        images={data.allInstagramContent.edges.map(({ node }: any) => ({
          ...node.localImage.childImageSharp.fluid,
        }))}
      />
    </Layout>
  );
};

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          localImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalImg
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`;
