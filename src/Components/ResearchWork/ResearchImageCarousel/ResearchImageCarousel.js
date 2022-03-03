import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "./ResearchImageCarousel.css";
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Navigation } from "swiper";

export default function App({ data, setPage }) {
	return (
		<>
			<Swiper
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={10}
				modules={[Navigation]}
				onSlideChange={(swiper) => setPage(swiper.realIndex + 1)}
				navigation={{
					nextEl: ".research-next-btn",
					prevEl: ".research-prev-btn",
				}}
				className='researchWork'>
				{data.map((item, ind) => (  
					<SwiperSlide key={ind}>
						<img src={item.image} alt='' srcset='' />{" "}
					</SwiperSlide>
				))}
				{/* <SwiperSlide>
					{" "}
					<img
						src='/assets/researchWork/research1.png'
						alt=''
						srcset=''
					/>{" "}
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src='/assets/researchWork/research1.png'
						alt=''
						srcset=''
					/>{" "}
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src='/assets/researchWork/research1.png'
						alt=''
						srcset=''
					/>{" "}
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img
						src='/assets/researchWork/research1.png'
						alt=''
						srcset=''
					/>{" "}
				</SwiperSlide> */}
			</Swiper>
		</>
	);
}
