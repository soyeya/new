import React , { useState, useEffect } from 'react';
import workImg01 from '../media/imgs/work/work01.png';
import workImg02 from '../media/imgs/work/work02.png';
import workImg03 from '../media/imgs/work/work03.png';
import workImg04 from '../media/imgs/work/work04.png';
import workImg05 from '../media/imgs/work/work05.png';
import workImg06 from '../media/imgs/work/work06.png';
import workImg07 from '../media/imgs/work/work07.png';
import workImg08 from '../media/imgs/work/work08.png';
import workImg09 from '../media/imgs/work/work09.png';
import workImg10 from '../media/imgs/work/work10.png';
import workImg11 from '../media/imgs/work/work11.png';
import workImg12 from '../media/imgs/work/work12.png';
import workImg13 from '../media/imgs/work/work13.png';
import workImg14 from '../media/imgs/work/work14.png';
import axios from 'axios';
import workDB from '../json/work.json';


const Work = () => {

   const [datas, setDatas] = useState(workDB);

   const objImg = [
      workImg01,
      workImg02,
      workImg03,
      workImg04,
      workImg05,
      workImg06,
      workImg07,
      workImg08,
      workImg09,
      workImg10,
      workImg11,
      workImg12,
      workImg13,
      workImg14
   ]

   useEffect(() => { },[datas])

     return(
        <div className="workWrappers">
         <div className="workWrap">
         {datas.map((v,i) => {
            return(
            <ul key={'worklist' + i}>
                <a href={v.href} target="_blank">
                  <li className='imgBoxs'><img src={objImg[i]} alt="test" /></li>
                        <li>
                        <h3>{v.project} : {v.title}</h3>
                            <div className="text">
                               <p><span>프로젝트기간 :</span>{v.period}</p>
                               <p><span>참여인원 :</span>{v.person}</p>
                               <p><span>참여도 :</span>{v.contribution}</p>
                               <p><span>Skills :</span>{v.skills}</p>
                            </div>
                        </li>
                </a>
            </ul>
            )
            })}
         </div>
        </div>
     )
}

export default Work;