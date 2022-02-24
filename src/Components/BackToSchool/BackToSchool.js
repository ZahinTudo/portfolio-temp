import React, { useEffect, useState } from "react";
import dragScroll from "../../customHooks/dragScroll";
import "./BackToSchool.css";

export default function BackToSchool() {
	const [data, setData] = useState([]);
	dragScroll("media_image_wrapper");
	useEffect(() => {
		fetch("/mediaCoverage.json")
			.then((res) => res.json())
			.then((result) => setData(result));
	}, []);

	return (
		<section className='backToSchool  d-flex flex-wrap flex-column justify-content-center align-items-center'>
			<div className='container'>
				<div className='d-flex flex-wrap justify-content-between align-items-center'>
					<div className='col-12 col-md-6'>
						<h3 className='title'>Back to School</h3>
						<p className='short-description'>
							Earth is the third planet from the Sun and the only
							astronomical object known to harbor life. According
							to radiometric dating estimation and other evidence,
							Earth formed over 4.5 billion years ago.{" "}
						</p>
					</div>
					<div className='col-12 col-md-5'>
						<div className='position-relative'>
							<img
								src='/assets/video-image.png'
								alt=''
								className='img-fluid'
							/>
							<span className='play-btn position-absolute'>
								<img
									src='/assets/play-btn.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='container pt-5' style={{}}>
				<div
					style={{ overflow: "hidden", width: "91vw" }}
					className='d-flex flex-wrap justify-content-center align-items-center'>
					<div className='col-12 col-md-5'>
						<h3 className='coverage'>News & Media Coverages</h3>
						<p className='coverage-details'>
							Delhi: Privileged schoolgirl helps SDMC school get
							playground
						</p>
						<div>
							{data.map((item, ind) => (
								<span
									className='p-3 ps-0 d-inline-block'
									style={{ width: "25%" }}>
									<img
										src={item.media_image}
										alt=''
										className='img-fluid'
									/>
								</span>
							))}
						</div>
					</div>
					<div
						className='col-12 col-md-7 '
						style={{ overflow: "hidden" }}>
						<div
							className='media_image_wrapper w-100'
							style={{ overflowX: "scroll" }}>
							{data.map((item, ind) => (
								<div className='img-wrapper'>
									<img
										src={item.image}
										alt=''
										srcset=''
										className='img-fluid'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
