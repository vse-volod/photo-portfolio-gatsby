import Img from 'gatsby-image';
import { chunk, sum } from 'lodash';
import React from 'react';
import { Box } from 'rebass';

const Gallery = ({ images, itemsPerRow }: any) => {
  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow);
  console.log(images);

  return (
    <div>
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(
          row.map((image: any) => image.aspectRatio)
        );

        return row.map((image: any) => (
          <Box
            key={image.id}
            as={Img}
            fluid={image}
            width={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
            style={{ display: 'inline-block' }}
          />
        ));
      })}
    </div>
  );
};

export default Gallery;
