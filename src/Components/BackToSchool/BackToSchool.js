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
		<section
			id='backToSchool'
			className='backToSchool fadeEntry  d-flex flex-wrap flex-column justify-content-center align-items-center'>
			<div className='custom_container'>
				<div className='d-flex flex-wrap justify-content-between align-items-center'>
					<div className='col-12 col-md-6'>
						<h3 className='title'>Back to School</h3>
						<p className='short-description'>
							<p>
								As the pandemic took hold in 2020, students
								across the globe were locked out of their
								classrooms and playgrounds, leading to a massive
								disruption in their education and development.
								Some students faced comparatively more
								disadvantages due to a lack of access to
								educational tools and infrastructure. Surrounded
								by the complex problems arising in their daily
								lives at home, it became even more integral to
								reintroduce these students to a safe place which
								offered them a respite in the form of knowledge,
								social camaraderie, and belongingness. To build
								this space, I started my initiative
								‘Back2School’ with a focus on conducting
								interactive workshops with the students and
								building basic infrastructure for low-resourced
								schools.
							</p>{" "}
							<p>
								By collaborating with a South Delhi Municipal
								Corporation (SDMC) school with a dilapidated
								playground and lack of resources, I initiated
								the process of filling the gaps in the school’s
								infrastructure and building a solace for the
								students.
							</p>{" "}
							<p>
								To initiate the project, I drafted an appeal for
								funding from donors and secured a corporate
								sponsorship of INR 5 lakhs. To put the money to
								use, I coordinated with the school authorities,
								met vendors, and negotiated fair price for the
								construction of the basketball court. While
								pandemic continued to wreak havoc across the
								state, we met our goals of construction between
								January 2021 and August 2021.
							</p>{" "}
							I continue to expand my initiative through
							small-scale projects with other schools in the
							state, including infrastructure upgradation,
							collecting and donating electronic devices to ensure
							seamless access to online learning, and developing
							and conducting workshops on environmental
							sustainability and recycling, another cause close to
							my heart.
						</p>
					</div>
					<div className='col-12 col-md-5'>
						<div className='position-relative'>
							{/* <img
								src='/assets/video-image.png'
								alt=''
								className='img-fluid'
							/> */}
							<video
								width='100%'
								height='300'
								poster='/assets/video-image.png'
								controls>
								<source
									src='/assets/introVideo.mp4'
									type='video/mp4'></source>
							</video>
							{/* <span className='play-btn position-absolute'>
								<img
									src='/assets/play-btn.png'
									alt=''
									className='img-fluid'
								/>
							</span> */}
						</div>
						<div className='mt-5'>
							<h3 className='coverage'>News & Media Coverages</h3>
							<p className='coverage-details'>
								Delhi: Privileged schoolgirl helps SDMC school
								get playground
							</p>
							<div>
								{data.map((item, ind) =>
									item.media_image != "" ? (
										<span
											key={ind}
											className='p-3 ps-0 d-inline-block'
											style={{ width: "25%" }}>
											<a
												href={item.website}
												target='_blank'
												rel='noopener noreferrer'>
												<img
													src={item.media_image}
													alt=''
													className='img-fluid'
												/>
											</a>
										</span>
									) : (
										<span></span>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='custom_container_left pt-5' style={{}}>
				<div
					style={{ overflow: "hidden" }}
					className='d-flex flex-wrap justify-content-center align-items-center'>
					<div className='' style={{ overflow: "hidden" }}>
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
