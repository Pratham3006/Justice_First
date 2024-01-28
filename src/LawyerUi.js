import React, { useState } from 'react';
import './LawyerUi.css';
import bulb from './components/assets/bulb-2.png';
import setbulb from './components/assets/bulb1.png';
import { Link } from 'react-router-dom';

export default function LawyerUi() {
  const [submit, setSubmit] = useState({
    backgroundColor: 'purple',
  });
  const [image, setImage] = useState(bulb);
  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const handleDarkmode = () => {
    setImage(currentImage => (currentImage === bulb ? setbulb : bulb));

    setSubmit(currentSubmit => {
      const newBackgroundColor = currentSubmit.backgroundColor === 'green' ? 'purple' : 'green';

      return {
        backgroundColor: newBackgroundColor,
      };
    });

    setStyle(currentStyle => {
      const newColor = currentStyle.color === 'black' ? 'antiquewhite' : 'black';
      const newBackgroundColor = currentStyle.backgroundColor === 'white' ? 'black' : 'white';

      return {
        color: newColor,
        backgroundColor: newBackgroundColor,
      };
    });
  };
  const[text,setText]=useState(' ')
  const handleChange=(e)=>{
    setText(e.target.value)


  }
  const handleText=()=>{
    setText(' ')
  }

  return (
    <>
      <nav className='Lawyer-Login' style={style}>
        <div className='header-lawyer'>
          <button className='header-button' onClick={handleDarkmode}>
            <img src={image} className='bulb-image' alt='' />
          </button>
        </div>
        <div className='header-lawyer' style={style}>
          <p>Rules</p>
        </div>
        <div className='header-lawyer' style={style}>
          <p>Nomenclature</p>
        </div>
        <div className='header-lawyer' style={style}>
          <p>Guide and manual</p>
        </div>
        <div className='header-lawyer' style={style}>
          <p>Documentation</p>
        </div>
        <Link to='/'>
          <button className='header-button12
          '>Logout</button>
        </Link>
      </nav>

      <div className='content' style={style}>
        <div className='marquee'>
          <div className='track'>
            <div className='text' style={{ color: 'red' }}>
              &nbsp;This is a government Website. Any form of misuse or malpractice which may lead to discrepancy in the official data can lead to legal punishments.
            </div>
          </div>
        </div>
        <p className='content-para'>Welcome to Justice First</p>
        <div className='transmission'>
          <p>Enter the case summary for your text</p>

          <textarea type='text' className='input-box' value={text} onChange={handleChange}/>
          <div className='button-div'>
            <button className='input-button-data' onClick={handleText} style={{ ...submit, color: style.color, fontSize: style.color === 'antiquewhite'  ? '20px' : '20px',fontWeight:"800" }}>
              Submit
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
