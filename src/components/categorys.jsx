import React from 'react'; 
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import './categorys.scss';

const Categorys = () => {
  return (
    <div className='CatCointainer'>
      <div className='CatCointainerWrapper'>
         <div className='CatItm'>
          <Link exact to='/mens'>
            MENS
          </Link>
          </div>
         <div className='CatItm' style={{borderLeft: '1.5px solid black'}}>
         <Link exact to='/womens'>
            WOMENS
          </Link>
          
          </div>
         <div className='CatItm' style={{borderLeft: '1.5px solid black'}}>
         <Link exact to='/kids'>
            KIDS
          </Link>
          </div>
        </div>
    </div>
  )
}

export default Categorys