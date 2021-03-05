import React from 'react';

import LottieView from 'lottie-react-native';

const Preloader = () => {
  return (
    <LottieView
      source={require('../../assets/lottie/loader.json')}
      autoPlay
      loop
    />
  );
};

export default Preloader;
