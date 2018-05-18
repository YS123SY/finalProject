import React from "react"
import {Link , Router} from 'react-router-dom'

import './NavBar.css'

class NavBar extends React.Component {
    render () {
        return (
    
 <div className="navbar-main">
<ul>
<Link to={`$#`}>
    <input type='button' value='Post an article'/>
     </Link>
  <li> <h1>G M C STUDENTS BLOG</h1></li>
  <li> <i className="fa fa-home"></i></li>
  <Link to={`$#`}>
    <input type='button' value='sign in'/>
     </Link>
</ul>

 </div>

        )
    }
};

export default NavBar;
