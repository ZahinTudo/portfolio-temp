import React, { useEffect, useState } from "react";
import dragScroll from "../../customHooks/dragScroll";
import "./InTheMedia.css";

export default function InTheMedia() {
	const [data, setData] = useState([]);
	dragScroll("mediaImage_wrapper");
	useEffect(() => {
		fetch("/inthemedia.json")
			.then((res) => res.json())
			.then((result) => setData(result));
	}, []);
	return (
		<section
			id='media'
			className='inTheMedia fadeEntry'
			style={{ overflowX: "hidden" }}>
			<div className='custom_container'>
				<h3 className='title text-capitalize'>
					awards and recognition
				</h3>
				{/* <p className='title_brief pe-5'>
					Earth is the third planet from the Sun and the only
					astronomical object known to harbor{" "}
					<br className='d-none d-md-inline-block' /> life. According
					to radiometric dating estimation and other evidence, Earth
					formed over 4.5 <br className='d-none d-md-inline-block' />{" "}
					billion years ago.
				</p> */}
			</div>
			<div className='custom_container_left '>
				<div style={{}} className='scroll_carousel'>
					<div
						className=' mediaImage_wrapper'
						style={{ overflowX: "scroll", overflowY: "hidden" }}>
						{data.map((item, ind) => (
							<div className='inTheMedia_img position-relative'>
								<img
									src={item.image}
									alt=''
									className='img-fluid'
								/>
								<div className='overlay_title position-absolute p-3'>
									<span className=' title'>{item.title}</span>
									<div className='d-flex justify-content-between align-items-center px-2'>
										<div className='col-6'>
											<div
												className='py-2'
												style={{ width: "50%" }}>
												<img
													style={{ height: "2rem" }}
													src={item.media}
													alt=''
													className='img-fluid '
												/>
											</div>
											<div className='date'>
												{item.date}
											</div>
										</div>
										<div className='col-6 text-end viewFullNews'>
											<a
												href={item.link}
												className='d-inline-flex align-items-center text-white'
												style={{
													textDecoration: "none",
												}}
												target='_blank'
												rel='noopener noreferrer'>
												<span className='me-2'>
													View Full News
												</span>
												<span>
													<img
														style={{
															width: "1rem",
														}}
														className='img-fluid'
														src='/assets/linkArrow.png'
														alt=''
														srcset=''
													/>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
