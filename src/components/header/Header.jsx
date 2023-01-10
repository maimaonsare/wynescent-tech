import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll';
import './Header.css';
import Logo from '../../assets/logo3.png';
import menuIcon from '../../assets/menu-icon.png';

function Header() {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>
        <img src={Logo} className='logo' alt="" />
          {menuOpened=== false && mobile === true? 
          (
            <div style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px"
            }}
            onClick={()=> setMenuOpened(true)}
            >
              <img src={menuIcon} alt='' style={{width: '1.5rem', height: '1.5rem'}}/>
            </div>
          ): (
            <ul className='menus'>
            <li>
              <Link onClick={()=> setMenuOpened(false)}
              to='main-body'
              span={true}
              smooth={true}
              >Home
              </Link>
            </li>
            <li>
              <Link onClick={()=> setMenuOpened(false)}
              to='services'
              span={true}
              smooth={true}
              >Services
              </Link>
            </li>
            <li>
              <Link onClick={()=> setMenuOpened(false)}
              to='projects'
              span={true}
              smooth={true}
              >Projects
              </Link>
            </li>
            <li>
              <Link onClick={()=> setMenuOpened(false)}
              to='subscription'
              span={true}
              smooth={true}
              >Subscriptions
              </Link>
            </li>
            <li>
              <Link
              onClick={()=> setMenuOpened(false)}
              to='testimonies'
              span={true}
              smooth={true}
              >Testimonials
              </Link></li>
        </ul>
          )}
    </div>
  )
}

export default Header