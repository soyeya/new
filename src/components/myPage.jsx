import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import myprofileImg from '../media/imgs/myprofile.png';
import ListData from '../json/mypage.json';
import myPageWork01 from '../media/imgs/work/work01.png';
import myPageWork02 from '../media/imgs/work/work02.png';
import myPageWork03 from '../media/imgs/work/work03.png';
import myPageWork04 from '../media/imgs/work/work04.png';
import myPageWork05 from '../media/imgs/work/work05.png';
import myPageWork06 from '../media/imgs/work/work06.png';
import myPageWork07 from '../media/imgs/work/work07.png';
import myPagePrj01 from '../media/imgs/work/work08.png';
import myPagePrj02 from '../media/imgs/work/work09.png';
import myPagePrj03 from '../media/imgs/work/work10.png';
import myPagePrj04 from '../media/imgs/work/work11.png';
import myPagePrj05 from '../media/imgs/work/work12.png';
import myPagePrj06 from '../media/imgs/work/work13.png';
import myPagePrj07 from '../media/imgs/work/work14.png';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

const MyPage = () => {

    const [lists, setLists] = useState(ListData);
    const workObj = [
        myPageWork01,
        myPageWork02,
        myPageWork03,
        myPageWork04,
        myPageWork05,
        myPageWork06,
        myPageWork07
    ]
    const prjObj = [
        myPagePrj01,
        myPagePrj02,
        myPagePrj03,
        myPagePrj04,
        myPagePrj05,
        myPagePrj06,
        myPagePrj07
    ]

    useEffect(() => { 
        window.scrollTo(0, 0);
    },[lists])

     return(
        <div className="myPageWrappers">
          <div className="myPageWrap">
          <section className="mypageCont">
            <div className="spaceWrap">
                <div className="profileBoxs">
                    <img src={myprofileImg} alt="profileImg" />
                </div>
            </div>
            <div className="spaceWrap">
                <ul>
                    <li><h3>SOYE PARK</h3>
                    </li>
                    <li className='tag'><Link to="/">@프론트개발자 소예 채널보기</Link></li>
                </ul>
            </div>
            </section>
            <section className="mypageInfo">
                <article>
                    <ul>
                        <li><h5>Birth</h5><p>1994.12.07</p></li>
                        <li><h5>Skills</h5><p>HTML , CSS3, SCSS , JAVASCRIPT, REACT, TYPESCRIPT, VUE</p></li>
                    </ul>
                    <ul>
                        <li className='twos'><h5>Contact</h5><p>010.3212.9413<span>qkrthdp123@naver.com</span></p></li>
                    </ul>
                    <ul>
                        <li className='twos'><h5>Carrier</h5><p>인더엑스 웹퍼블리셔 6개월 근무<span>옵티머스 솔루션스 웹퍼블리셔 1년 3개월 근무</span></p></li>
                    </ul>
                </article>
                <article className='swiperCont'>
                     <h3>Works</h3>
                     <div className="work-swiperWrappers">
                     <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                       {lists.workList.map((v,i) => {
                        return(
                            <SwiperSlide key={'swiperList01' + i}>
                                <a href={v.href} target='_blank'>
                                <img src={workObj[i]} alt={'listImg'+ i} /><span>{v.title}</span>
                                </a>
                                </SwiperSlide>
                        )
                       })}
                        </Swiper>
                     </div>
                </article>
                <article className='swiperCont'>
                     <h3>개인 프로젝트</h3>
                     <div className="work-swiperWrappers">
                     <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                       {lists.projectList.map((v,i) => {
                        return(
                            <SwiperSlide key={'swiperList02' + i}>
                                <a href={v.href} target="_blank">
                                <img src={prjObj[i]} alt={'listImg'+ i} /><span>{v.title}</span>
                                </a>
                                </SwiperSlide>
                        )
                       })}
                        </Swiper>
                     </div>
                </article>
            </section>
            </div>
        </div>
     )

}

export default MyPage;