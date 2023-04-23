import React, { useState } from "react";
import "./Navbar.css";
import l from "../assets/images/l.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoo from "../assets/images/logoo.jpg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
 
  const [iconChange,setIconChange]=useState(true)
  return (
    
      <div>
        <nav className="NavbarItems">
          <img className="Nav_img" src={logoo}></img>
          <div className="Menu-icons">
            
           {iconChange?
           <div
           onClick={()=>setIconChange(false)
          }
           >
            <MenuIcon/>
           </div>
           :
           <div
           onClick={()=>setIconChange(true)
          }
           >
            <CloseIcon/>
           </div>

           
          }
          </div>
          <ul className={iconChange?"Nav-menu active":"Nav-menu"}>
            <li> <a href="/" className="Nav-links">Home</a></li>
            <li> <NavLink className="Nav-links" activeClassName="" to='/franchId'>
                Franchise
            </NavLink></li>
            <li> <NavLink className="Nav-links" activeClassName="" to='/blog'>
                Blog
            </NavLink></li>
            <li> <NavLink className="Nav-links" activeClassName="" to='/about'>
                About us
            </NavLink></li>
            <li> <NavLink className="Nav-links" activeClassName="" to='/contact'>
                Contact us
            </NavLink></li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
