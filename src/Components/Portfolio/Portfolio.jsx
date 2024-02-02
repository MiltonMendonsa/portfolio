import React from 'react'
import { useContext } from "react";
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import P1 from '../../img/project1.png'
import P2 from '../../img/project2.png'
import P3 from '../../img/project3.png'
import P4 from '../../img/project4.png'
import P5 from '../../img/project5.png'
import P6 from '../../img/project6.png'
import P7 from '../../img/project7.png'
import { themeContext } from "../../Context";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={P1} alt="" />
                <h4>Criftoz NFT Store</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={P5} alt="" />
                <h4>Dishan Boating and Homestay</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={P2} alt="" />
                <h4>Paytm UI Clone</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={P6} alt="" />
                <h4>Airport Management-System</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={P4} alt="" />
                <h4>Email Validator</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={P3} alt="" />
                <h4>ToDo List</h4>
            </SwiperSlide>
            <SwiperSlide>
                <img src={P7} alt="" />
                <h4>Map Clone</h4>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio
