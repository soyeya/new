import React , {useState, useEffect} from 'react';
import projectData from '../json/myproject.json';
import closeBtn from '../media/imgs/close.png';
import infoImg from '../media/imgs/infoWh.png';
import myProjectImg01 from '../media/imgs/work/work08.png';
import myProjectImg02 from '../media/imgs/work/work09.png';
import myProjectImg03 from '../media/imgs/work/work10.png';
import myProjectImg04 from '../media/imgs/work/work11.png';
import myProjectImg05 from '../media/imgs/work/work12.png';
import myProjectImg06 from '../media/imgs/work/work13.png';
import myProjectImg07 from '../media/imgs/work/work14.png';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';


const MyProject = () => {

    const [projectList , setProjectList] = useState(projectData);
    const [openAppInfo , setOpenAppInfo] = useState(false);
    const [infoText , setInfoText] = useState();

    const objImg = [
      myProjectImg01,
      myProjectImg02,
      myProjectImg03,
      myProjectImg04,
      myProjectImg05,
      myProjectImg06,
      myProjectImg07
    ]

    const openAppEvet = (e) => {
         
        const thisTarget = e.target;
    
             setOpenAppInfo(true);
             if(thisTarget.className === "appBtn0"){
                setInfoText([projectList.appInfo[0]]);
             }else if(thisTarget.className === "appBtn1"){
                setInfoText([projectList.appInfo[1]]);
             }else if(thisTarget.className === "appBtn2"){
                setInfoText([projectList.appInfo[2]]);
             }else if(thisTarget.className === "appBtn3"){
                setInfoText([projectList.appInfo[3]]);
             }else if(thisTarget.className === "appBtn4"){
                setInfoText([projectList.appInfo[4]]);
             }else if(thisTarget.className === "appBtn5"){
                setInfoText([projectList.appInfo[5]]);
             }else if(thisTarget.className === "appBtn6"){
                setInfoText([projectList.appInfo[6]]);
             }else{
                setInfoText([]);
             }
    }

    const closeOpenApp = () => {
        setOpenAppInfo(false);
    }

    const onChangeslidesEvet = () => {
        setOpenAppInfo(false);
        setInfoText([]);
    }

    useEffect(() => {
        window.scrollTo(0,0);
    },[projectList, openAppInfo, infoText])

     return(
     <div className="myProjectWrappers">
         <div className="myProjectWrap">
            <div className="myprojectCont">
              <section>
                <Swiper
                    direction={'vertical'}
                    className="mySwiper"
                    spaceBetween={10000}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    mousewheel={true} 
                    touchStartPreventDefault={true} // 터치 시 기본 동작을 막아서 스와이프 활성화
                    onSlideChange={onChangeslidesEvet}
                    modules={[Mousewheel]}
                    speed={500}
                >
                       {projectList.projectList.map((v,i) => {
                        return(
                            <SwiperSlide key={'swiperProject' + i} className={ openAppInfo ? "active" : ""}>
                               <img src={objImg[i]} alt={'listImg'+ i+1} />
                               <p><strong>{v.title}</strong><span>{v.info}</span></p>
                               <button type="button" className={'appBtn'+i} onClick={openAppEvet} style={{backgroundImage : `url(${infoImg})`}}></button>
                           </SwiperSlide>
                        )
                       })}
                       <div className={openAppInfo ? "hiddenInfoBoxs active" : "hiddenInfoBoxs"}>
                          <div className="hiddenInfoBoxsWrap">
                             <div className="hiddenTitles">
                                 <h5>앱정보</h5>
                                 <button type="button" onClick={closeOpenApp}><img src={closeBtn} alt="close" /></button>
                             </div>
                             <div className="hiddenContent">
                                {infoText ? infoText.map((v,idx) => {
                                    return(
                                        <ul key={'hiddenList' + idx}>
                                        <li><p>앱제목 :<span>{v[0]}</span></p></li>
                                        <li><p>Skill :<span>{v[1]}</span></p></li>
                                        <li><p>Info :<span>{v[2]}</span></p></li>
                                        <li><p>Go Link :<a href={v[3]} target='_blank'>{v[3]}</a></p></li>
                                        <li className='imgBoxs'><img src="" alt="" /></li>
                                    </ul>
                                    )
                                }): (
                                    <ul>
                                        <li><p>앱제목 :<span></span></p></li>
                                        <li><p>Skill :<span></span></p></li>
                                        <li><p>Info :<span></span></p></li>
                                        <li><p>Go Link :</p></li>
                                    </ul> 
                                )}
        
                             </div>
                          </div>
                       </div>
                        </Swiper>
              </section>
            </div>
         </div>
     </div>
     )
}

export default MyProject;