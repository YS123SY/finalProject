import React from "react"
import {Link , Router} from 'react-router-dom'

import './NavBar.css'

class NavBar extends React.Component {
    render () {
        return (
    
 <div className="navbar-main">

<div className='post'><Link to={`$#`}>
    <input type='button' value='Post an article'/>
     </Link></div>
  <div> <h1 className='big-title'>G M C STUDENTS BLOG</h1></div>
  <div className='post'> <input type='spaceholder' value='Search'/> </div>
  <div className='post'><Link to={`$#`}>
   <input type='button' value='Sign in'/>
     </Link></div>


 </div>

        )
    }
};

export default NavBar;
