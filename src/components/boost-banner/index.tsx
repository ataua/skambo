import React from 'react';

import { MainBanner, Infos, Img } from './style';

interface BoostBanner {
  image: string;
  textHeader: string;
  subheader: string;
  info: string;
}

const BoostBanner = ({ image, textHeader, subheader, info }: BoostBanner) => {
  const infos = info.split('-');
  const headInfo = infos.shift();

  console.log(infos)
  return (
    <MainBanner>
      <Infos>
        <h2>{textHeader}</h2>
        <h3>{subheader}</h3>
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

// demo: https://codesandbox.io/s/hardcore-allen-k1h9q?file=/src/App.js
