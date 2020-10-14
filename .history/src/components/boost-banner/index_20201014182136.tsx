import React from 'react';

import { MainBanner, Infos, Img } from './style';

interface BoostBanner {
  color: string;
  image: string;
  textHeader: string;
  info: string;
}

const BoostBanner = ({ color, image, textHeader, info }: BoostBanner) => {
  const infos = info.split('-');
  const headInfo = infos.shift();

  return (
    <MainBanner {...color}>
      <Infos>
        <h2>{textHeader}</h2>
      </Infos>
      <Img alt="Banner Image" src={image} />
      <Infos>
        <h3>{headInfo}</h3>
        {infos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Infos>
    </MainBanner>
  );
};

export default BoostBanner;
