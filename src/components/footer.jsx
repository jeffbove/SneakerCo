import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import PaymentOptions from './img/paymentOptions.png'
import './footer.scss'

const Footer = () => {
  return (
   <div className='FooterCointainer'>
<div className='wrapper'>
  <div className='wrapperInner'>
  <h3>Like my website? Contact me :</h3>
           <div className='tag1'>
           Twitter : <a href='https://twitter.com/JeffreyBove6/media'>@JeffreyBove6</a>
         </div>
         <div className='tag2'>
           FaceBook : <a href='https://www.facebook.com/profile.php?id=100083696882533'>@jeffreyBove</a>
         </div>
         <div className='tag2'>
           Email : Jeffreybove3110@gmail.com
         </div>
         <div className='tag3'>
           PhoneNumber : +1 772-410-7388
         </div>
  </div>

  <div className='wrapperInner'>
    <h3>Quick links :</h3>
    <div style={{display:'flex', justifyContent:'center'}}>
    <div>
          <Link exact to='/'>
          <div>HOME</div>
          </Link>
          <Link exact to='/mens'>
          <div>MENS</div>
          </Link>
          <Link exact to='/womens'>
          <div>WOMENS</div>
          </Link>
          <Link exact to='/kids'>
          <div>KIDS</div>
          </Link>
      </div>
      <div style={{paddingLeft:'3vw'}}>
          <Link exact to='/newbalances'>
          <div>NEW BALANCE</div>
          </Link>
          <Link exact to='/airForce1s'>
          <div>AIR FORCE 1S</div>
          </Link>
          <Link exact to='/hoodies'>
          <div>HOODIES</div>
          </Link>
          <Link exact to='/jordan4s'>
          <div>JORDAN 4S</div>
          </Link>
      </div>   
    </div>
      
  </div>



  <div className='wrapperInner'>
    <h3>Payment Options :</h3>
    <p style={{fontSize:'10px'}}>-- PSA: SNEAKERCO. does NOT have any type of physical stock and we dont not sell product ourself, this page is built to find what you like and then be redirected to StockX.com / GOAT.com --</p>
         <div>
        <img src={PaymentOptions} style={{width:"300px"}} className='PaymentOpts'/>
         </div>
  </div>
  

</div>
   </div>
  )
}

export default Footer