import React from 'react';
import "../styles/src/Main.scss";
import Leftbutton from '../assets/img/Slide_leftbutton.png'
import Rightbutton from '../assets/img/Slide_rightbutton.png'

export default function BtnSlide({moveSlide, derection}) {
  
  return (
    <div>
      <button onClick={moveSlide} className={ derection === "next" ? 'Right_button' : 'Left_button'}>
      <img src={ derection === "next" ? Rightbutton : Leftbutton } alt="button_slide_imgs"></img></button>

  </div>

  );
};
