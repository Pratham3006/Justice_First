import React from 'react';
import Lottie from 'react-lottie';
import animationData from './components/assets/Animation - 1705738607896.json'; 
import LocalSvg from './components/assets/fcb-61.svg'; 
import './Loader.css'

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='parent'>
      <div className='animation'>
      <Lottie options={defaultOptions} style={{  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',zIndex:'2' }} />
      </div>
      <img src={LocalSvg} className='imageClass' />

      
      
    </div>
  );
};

export default Loader;
