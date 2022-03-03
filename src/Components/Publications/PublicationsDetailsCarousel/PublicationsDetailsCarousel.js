import React, { useRef, useState } from "react";
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "./PublicationsDetailsCarousel.css";
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Navigation } from "swiper";
import DetailsCard from "./DetailsCard";

export default function PublicationsDetailsCarousel({ data, setPage }) {
	console.log("items", data);
	return (
		<>
			<Swiper
				modules={[Navigation]}
				onSlideChange={(swiper) => setPage(swiper.realIndex + 1)}
				navigation={{
					nextEl: ".publications-next-btn",
					prevEl: ".publications-prev-btn",
				}}
				className='publicationsDetails'>
				{data.map((item, ind) => (
					<SwiperSlide>
						<DetailsCard item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
