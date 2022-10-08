import React from 'react'
import './Pictures.scss'
import Img1 from './img/BackgroundPic.png'
import Img2 from './img/BackgroundPic2.png'
import Img3 from './img/BackgroundPic3.png'

const Pictures = () => {
  return (
        <div className='BioCointainer'>
           <img className='BioImg1' src={Img1} />
           <img className='BioImg2' src={Img2} />
           <img className='BioImg3' src={Img3} />
        </div>
)};

export default Pictures