import React from 'react'

//CSS
import "./thirdSection.css";

// SLIDER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";

//import Img1 from "../../../../images/1.jpg";
import Img2 from "../../../../images/2.jpg";
import Img3 from "../../../../images/3.jpg";
import Img4 from "../../../../images/4.jpg";

import Img1 from "../../../../images/1.jpg";

function ThirdSection() {
  return (
    <div className="thirdSection">
        <div className="containerWrapper" >
            <div className="thirdSection1">
                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    navigation
                    // pagination={{
                    //   clickable: true,
                    // }}
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}
                    >

                    <SwiperSlide>
                        <img src={Img1} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Img2} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Img3} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Img4} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Img2} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Img1} />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src={Img4} />
                        </SwiperSlide>
                    </Swiper>
    
            <div className="thirdSectionBottom">
                <div className="thirdSectionLeft"><h2 className="thirdSectionHeader">The shelter is the Outcome of the Dream</h2></div>
                    <div className="thirdSectionRight">
                        <p className='thirdSectionParagraph'>Broker ipsum dolor sit amet, consectetuer luxury elit. Carrara marble commodo ligula eget dolor cum sociis cozy penatibus et magnis.</p>
                        <p className='thirdSectionParagraph'>Ochean de View extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and lust of Cancun with us.</p>
                    </div>
                </div>   
            </div>
        </div>
        
    </div>
  )
}

export default ThirdSection