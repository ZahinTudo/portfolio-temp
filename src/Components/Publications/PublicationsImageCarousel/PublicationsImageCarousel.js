import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "./PublicationsImageCarousel.css";
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { Navigation } from "swiper";

export default function PublicationsImageCarousel({
	data,
	setPage,
	slideto,
	setslide,
}) {
	const [swiper, setSwiper] = useState(null);

	return (
		<>
			<Swiper
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={10}
				modules={[Navigation]}
				// allowSlideNext={false}
				onSlideChange={(swiper) => {
					setPage(swiper.realIndex + 1);
					setslide(swiper.realIndex);
				}}
				navigation={{
					nextEl: ".publications-next-btn",
					prevEl: ".publications-prev-btn",
				}}
				className='imagepublications'>
				{data.map((item, ind) => (
					<SwiperSlide key={ind}>
						<img src={item.image} alt='' srcset='' />{" "}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
