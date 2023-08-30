import React, { useEffect, useState } from 'react';
import { XMLRequest } from 'utils/network';

export const XMLImage = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    src &&
      XMLRequest({
        src,
        cb: ({ data }) => {
          setImgSrc(data);
        },
      });
  }, [src]);

  return <img src={imgSrc} {...props} style={{ cursor: 'pointer', ...props.style }} width="100%" />;
};
