import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../media/imgs/profile.png';
import emailImg from '../media/imgs/email.png';
import callImg from '../media/imgs/call.png';

const MyProfile = () => {
     return(
       <div className="myProfileWrappers">
         <div className="myProfileWrap">
             <ul className='states'>
                <li><div className="profileBoxs"><img src={profileImg} alt="profile"/></div><h5>박소예</h5></li>
                <li><p>공개상태 <span>공개</span></p></li>
             </ul>
             <ul className='textArea'>
                <li><p>안녕하세요. 늘 고민하고 실천하는 프론트엔트 개발자 박소예입니다.<br/>
                제 채널에 오신 걸 환영합니다! </p></li>
             </ul>
             <ul className='myInfo'>
                <li><p><strong>BIRTH:</strong>1994.12.07</p></li>
                <li><p><strong>CERTIFICATION :</strong> ILLUSTRATION 1급, POTOSHOP 1급</p></li>
                <li><p><strong>SKILLS:</strong>HTML5, CSS3, SCSS, JAVASCRIPT, REACT, TYPESCRIPT, VUE</p></li>
             </ul>
         </div>
         <div className="contactWrap">
            <div className="contactBoxs">
               <ul className='contactTitle'><p>Contact</p><em></em></ul>
               <ul>
                  <p><img src={callImg} alt="call" />010.3212.9413 </p>
                  <Link to="mailto:parksoye123@gmail.com" className="link"><img src={emailImg} alt="email" />qkrthdp123@naver.com</Link>
               </ul>
            </div>
            
         </div>
       </div>
     )
}

export default MyProfile;