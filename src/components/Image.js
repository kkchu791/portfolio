import React from 'react';
import style from './Image.module.scss';

export const Image = ({
  image,
  width,
  height
}) => {
  return (
    <div className={style.container}>
      <img
        src={image}
        alt="profile_img"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Image;
