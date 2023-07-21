import React, { useEffect, useState } from 'react';
import './Carousel.scss';

interface Props {
  images: string[];
  frameSize: number;
  itemWidth: number;
  step: number;
  animationDuration: number;
}

const Carousel: React.FC<Props> = ({
  images,
  frameSize,
  itemWidth,
  step,
  animationDuration,
}) => {
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => setCurrentOffset(0), [itemWidth]);

  const maxOffset = images.length * itemWidth - frameSize * itemWidth;

  const setOffset = (newOffset: number) => {
    setCurrentOffset(newOffset);
  };

  const handleNextClick = () => {
    const newOffset = Math.max(currentOffset - itemWidth * step, -maxOffset);

    setOffset(newOffset);
  };

  const handlePrevClick = () => {
    const newOffset = Math.min(currentOffset + itemWidth * step, 0);

    setOffset(newOffset);
  };

  return (
    <div className="Carousel">
      <div
        className="Carousel__list-wrapper"
        style={{ width: `${frameSize * itemWidth}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${currentOffset}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((img, id) => (
            <li
              key={img}
              className="Carousel__list-item"
            >
              <img src={img} alt={`${id + 1}`} width={itemWidth} />
            </li>
          ))}
        </ul>
      </div>

      <div className="Carousel__buttons">
        <button
          type="button"
          onClick={handlePrevClick}
          disabled={currentOffset === 0}
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNextClick}
          disabled={currentOffset === -maxOffset}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
