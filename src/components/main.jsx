import React, { useState, useEffect} from 'react';
import Intro from '../lib/Intro.jsx';
import Work from './work.jsx';
import MyProfile from './myProfile.jsx';

const Main = () => {

  const [ btnEvet, setBtnEvet] = useState(true);

  const btnClickEvet = (e) => {

     const thistarget = e.target;
     if (thistarget) {
      // btnEvet 상태 토글 (true <-> false)
      setBtnEvet(prevState => !prevState);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  },[btnEvet]);

     return (
       <div className="mainWrappers">
         <div className="mainWrap">
           <Intro/>
           <div className="mainTabBoxs">
               <div className="tabBoxs">
                   <div className="btnBoxs">
                    <button type="button" className={btnEvet ? "active" : ""} onClick={btnClickEvet}>마이프로필</button>
                    <button type="button" className={!btnEvet ? "active" : ""}onClick={btnClickEvet} >Work</button>
                   </div>
                  <em className={!btnEvet ? "active" : ""} ></em>
               </div>
           </div>
           { btnEvet ? <MyProfile /> : <Work />}
         </div>
       </div>
     )
}

export default Main;