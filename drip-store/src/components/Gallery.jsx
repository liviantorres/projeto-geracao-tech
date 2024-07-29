import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

import arrowLeft from "../assets/seta-esquerda.svg";
import arrowRigth from "../assets/seta-direita.svg";

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateValue = -currentIndex * 100;

  const GalleryWrapper = styled.div`
    position: relative;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    overflow: hidden;
  `;

  const SlideImage = styled.div`
    display: flex;
    transition: transform 0.5 ease-in-out;
    transform: translateX(${translateValue}%);
    width: 100%;
    height: 100%;
  `;

  const Image = styled.img`
    width: 100%;
    height: ${(props) => props.height || "auto"};
    border-radius: ${(props) => props.radius};
  `;

  const Arrow = styled.img`
    position: absolute;
    top: 50%;
    transform: translateX(-50%);
    width: 25px;
    height: 25px;
    background: none;
    ${({ direction }) => direction}: 30px;
    opacity: ${({disabled}) => disabled ? 0.5 : 1};
    cursor: ${({disabled}) => disabled ? '' : 'pointer'};
  `;

  const ThumbnailContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'auto'};
  `;
  const Thumbnail = styled.img`
    border: 2px solid ${({selected}) => selected ? '#C92071' : 'none'};
    width: calc((${(props) => 100 / props.totalImages}% - 10px));
    height: auto;
    cursor: pointer;
  `;

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={className}>
        <GalleryWrapper width={width} height={height}>
          <SlideImage translateValue={translateValue}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                height={height}
                radius={radius}
              />
            ))}
          </SlideImage>
          
          <Arrow src={arrowLeft} direction="left" onClick={prevImage} disabled={currentIndex === 0}/>
          <Arrow src={arrowRigth} direction="right" onClick={nextImage} disabled={currentIndex === images.length - 1}/>
          </GalleryWrapper>

        {showThumbs && (
         <ThumbnailContainer width={width} height={height}>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              selected={currentIndex === index}
              onClick={() => selectImage(index)}
              totalImages = {images.length}
            />))}
          
          </ThumbnailContainer>  
        )}
      </div>
    </>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ),
};

export default Gallery;
