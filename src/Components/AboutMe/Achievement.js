import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "./Achievement.css";
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Navigation } from "swiper";

export default function Achievement({ page, data }) {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={3}
				spaceBetween={20}
				onSlideChange={(swiper) => page(swiper.realIndex + 1)}
				navigation={{
					nextEl: ".achievement-next-btn",
					prevEl: ".achievement-prev-btn",
				}}
				className='achievement_carousel'>
				{data.map((item, ind) => (
					<SwiperSlide>
						<img
							src={item.image}
							className='img-fluid'
							alt=''
							srcset=''
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
