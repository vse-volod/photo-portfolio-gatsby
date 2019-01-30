import Img from 'gatsby-image';
import { chunk, sum } from '../../utils/array';
import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Box, Link } from 'rebass';
import carouselFormatters from '../../utils/carouselFormatters';

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
  const aspectRatios = images.map(image => image.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

  const closeModal = () => setModalIsOpen(false);
  const openModal = (imageIndex: number) => {
    console.log(imageIndex);
    setModalCurrentIndex(imageIndex);
    setModalIsOpen(true);
  };

  return (
    <>
      {images.map((image, i) => (
        <Link
          key={image.id}
          href={image.originalImg}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            openModal(i);
          }}
        >
          <Box
            // key={image.id + image.originalImg}
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
        </Link>
      ))}
      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={images.map(({ originalImg, caption }) => ({
                  source: originalImg,
                  // caption,
                }))}
                currentIndex={modalCurrentIndex}
                formatters={carouselFormatters}
                components={{ FooterCount: () => null }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </>
  );
};

export default Gallery;
