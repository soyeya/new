import React from 'react';
import { Link } from 'react-router-dom';
import Logos from '../media/imgs/mytube.png';
import SearchImg from '../media/imgs/search.png';
import Myprofile from '../media/imgs/profile.png';
import alaramImg from '../media/imgs/bell.png';

const Header = () => {

      return (
        <header>
            <ul>
                <li><div className="iconBoxs"><Link to="/"><img src={Logos} alt="logoImg"/></Link></div></li>
                <li><div className="searchBoxs">
                  <input type="search" placeholder='검색'/><button type="button" className='searchBtn'><img src={SearchImg} alt="search" /></button></div></li>
                <li><div className="profileBoxs">
                     <button type="my"><img src={alaramImg} alt="alarm" /></button>
                     <Link to="/mypage" className='toMyPage'><img src={Myprofile} alt='profile' /></Link>
                  </div></li>
            </ul>
        </header>
      )
}

export default Header;