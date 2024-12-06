import React from 'react';
import { Link } from 'react-router-dom';
import navImg01 from '../media/imgs/home.png';
import navImg02 from '../media/imgs/myProject.png';
import navImg03 from '../media/imgs/myPage.png';

const Nav = () => { 

     return (
       <nav>
          <ul>
            <li><Link to='/'><img src={navImg01} alt="home" /><span>홈</span></Link></li>
            <li><Link to='/myproject'><img src={navImg02} alt="myProject" /><span>개인프로젝트</span></Link></li>
            <li><Link to='/mypage'><img src={navImg03} alt="myPage" /><span>내 페이지</span></Link></li>
          </ul>
       </nav>
     )
}

export default Nav;