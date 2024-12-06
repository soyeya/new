import React from 'react';
import profileImg from '../media/imgs/profile.png';

const Intro = () => {

     return(
        <div className="introWrappers">
            <div className="spaceWrap">
                <div className="profileBoxs">
                    <img src={profileImg} alt="profileImg" />
                </div>
            </div>
            <div className="spaceWrap">
                <ul>
                    <li><h3>프론트엔드개발자</h3>
                        <p>박소예입니다.</p>
                    </li>
                    <li className='tag'><span>@근무2년</span><span>@작업물N개</span><span>@개인프로젝트</span></li>
                    <li className='subTitles'>
                        <span>프론트엔드</span>
                        <span>웹퍼블리셔</span>
                        <span>웹개발</span>
                        <span>유지보수</span>
                    </li>
                </ul>
            </div>
        </div>
     )

}

export default Intro;