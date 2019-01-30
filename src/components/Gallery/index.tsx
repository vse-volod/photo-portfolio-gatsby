import Img from 'gatsby-image';
import { chunk, sum } from 'lodash';
import React from 'react';
import { Box } from 'rebass';

type Props = {
  images: {
    id: string;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    originalImg: string;
    caption: string;
    result: number;
  }[];
  itemsPerRow?: number[];
};

const Gallery = ({
  images,
  itemsPerRow: itemsPerRowByBreakpoints = [1],
}: Props) => {
  // Split images into groups of the given size
  // const rows = chunk(images, itemsPerRow);
  const aspectRatios = images.map(image => image.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  );
  console.log(images);

  return (
    <>
      {images.map((image, i) => (
        <Box
          key={image.id}
          as={Img}
          fluid={image}
          title={image.caption}
          width={rowAspectRatioSumsByBreakpoints.map(
            (rowAspectRatioSums, j) => {
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

              return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
            }
          )}
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            transition: 'filter 0.3s',
          }}
        />
      ))}
    </>
  );
};

export default Gallery;
