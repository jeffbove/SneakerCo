import React , { useState } from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    const [searchQuery, updateSearchQuery] = useState("");
    const HandleInputChange = (event) => {
        updateSearchQuery(event.target.value)
    }
  return (
    <div className='Nav'>
       <div className='NavWrapper'> 
       <div className='searchCointainer'>
       
        </div>
        <div className='Logo'> <Link exact to='/'>
        SNEAKERCO.
          </Link></div>
        <div className='right'>
            {/* <div className='menuItems'>
              <span style={{ paddingRight:'1.5vw'}}><Link exact to='/login'>
        LOG-IN
          </Link></span>
              <span style={{borderLeft:'1px solid white',  paddingLeft:'1.5vw'}}><Link exact to='/join'>
        JOIN
          </Link></span>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar