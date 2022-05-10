import React from "react";
import "./EnvironmentInitiative.css";
export default function EnvironmentInitiative() {
	return (
		<section id='envinitiative' className='envinitiative fadeEntry'>
			<div className='custom_container'>
				<div className='d-flex flex-wrap'>
					<div className='col-12'>
						<h3 className='title'>Environment Initiative</h3>
						<p className='title_brief'>
							“There is no Planet B” is a phrase that has stuck
							with me since I first heard it several years{" "}
							<br className='d-none d-md-inline-block' /> ago.
							Inspired by this I’ve tried to do my part to promote
							sustainability and environmental{" "}
							<br className='d-none d-md-inline-block' />
							awareness through various initiatives, including
							spearheading community-wide waste{" "}
							<br className='d-none d-md-inline-block' />
							segregation initiatives through Mission RGB,
							developing an environmental handbook and
							<br className='d-none d-md-inline-block' />{" "}
							curriculum, and leading food waste reduction efforts
							in my school.
						</p>
					</div>
					{/* <div className='col-12 col-md-7'>
						<div className='image_wrapper'>
							<span>
								<img
									className='img-fluid'
									src='/assets/envinitiative/envInitiative1.png'
									alt=''
									srcset=''
								/>
							</span>
							<span>
								<img
									className='img-fluid'
									src='/assets/envinitiative/envInitiative2.png'
									alt=''
									srcset=''
								/>
							</span>
						</div>
					</div> */}
				</div>
			</div>
			<div className='custom_container'>
				<div className='d-flex flex-wrap align-items-center  handbook'>
					<div className='col-12 col-md-5'>
						<h3 className='title'>
							The Green Handbook{" "}
							{/* <span className='writer ms-2'>
								by Inaayat Passi
							</span> */}
						</h3>

						<p className='title_brief' style={{}}>
							<p>
								One of the biggest issues confronting our planet
								today is climate change. In fact, it is more
								appropriate to term it as a very real and
								impending climate ‘emergency’ or ‘crisis’. The
								effects of such a climate crisis have already
								started manifesting in more ways than one and it
								is only deteriorating every year. Hence, the
								time to act is now. This is our planet and each
								one of us is a stakeholder in it. As such, it
								becomes imperative for us to be aware of the
								significance of the climate crisis and do our
								part in mitigating it. While interacting with my
								peers, I came to the realization that a lot of
								youngsters, as well as children, are gradually
								learning the importance of protecting the
								environment. But very few of them know how to
								move forward and implement their ideas.
							</p>{" "}
							<p>
								In the spirit of encouraging such efforts
								towards sustainability, I have put together the
								Green Handbook, a student-facing educational
								resource. I hope this makes it easier for
								students to think about how to help protect the
								environment and implement their ideas by
								volunteering and starting projects in their own
								communities. Each chapter has been specifically
								designed to include topics that are educational.
								They also incorporate fun activities that can
								help drive change and in its own capacity, allow
								the new generation to see a greener and cleaner
								tomorrow.
							</p>
						</p>
						<div className='mt-5 d-flex align-items-center'>
							<a
								className='d-inline-flex align-items-center'
								style={{ textDecoration: "none" }}
								href='https://drive.google.com/file/d/1afCY32SXA9o1XIjfRZMy5Kj4rjjAEt-s/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'>
								<span className='me-2 viewPdf'>View PDF</span>
								<span>
									<img
										style={{ width: "16px" }}
										src='/assets/blackLinkArrow.png'
										alt=''
										className='img-fluid'
									/>
								</span>
							</a>
						</div>
					</div>
					<div className='col-12 col-md-7 d-flex justify-content-end'>
						<div className='handbook_image'>
							<img
								className='img-fluid'
								src='/assets/envinitiative/handbook.png'
								alt=''
								srcset=''
							/>
						</div>
					</div>
				</div>
				<div className='d-flex flex-wrap align-items-center  handbook'>
					<div className='col-12 col-md-6 d-flex justify-content-start'>
						<div className='handbook_image rgb_mission'>
							<img
								className='img-fluid'
								src='/assets/envinitiative/missionrgb.png'
								alt=''
								srcset=''
							/>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div>
							<h3 className='title mt-5 mt-md-0'>Mission RGB</h3>

							<p
								className='title_brief rgb_mission'
								style={{
									textAlign: "justify",
								}}>
								<p>
									Mission RGB is a youth-led movement that
									began with a simple colour scheme: Red,
									Green, Blue. These three colours form the
									basis of a recycling management system: red
									for hazardous waste, green for compost and
									blue for recyclables. Mission RGB is a
									holistic initiative that seeks to entirely
									transform the way people think about waste
									management, thus significantly reducing
									their contribution to the waste problem in
									Delhi.
								</p>
								<p>
									Through door-to-door awareness and pledge
									drives, we managed to convince over 80% of
									households in Sunder Nagar to begin waste
									segregation and home composting. We are
									currently in the process of setting up a
									collective community composting system, as
									well as having talks with Residents Welfare
									Association of Nizamuddin to expand Mission
									RGB operations to their neighbourhood too.
								</p>
							</p>
							<div className='my-5 '>
								<a
									href='https://www.missionrgb.com/resources'
									style={{ textDecoration: "none" }}
									target='_blank'
									className='d-inline-flex align-items-center'
									rel='noopener noreferrer'>
									<span className='me-2 viewPdf'>
										View PDF
									</span>
									<span>
										<img
											style={{ width: "16px" }}
											src='/assets/blackLinkArrow.png'
											alt=''
											className='img-fluid'
										/>
									</span>
								</a>
							</div>
						</div>
						<div>
							<div className='position-relative d-flex justify-content-center'>
								<video
									width='70%'
									// height='200'
									poster='/assets/envinitiative/rgb.png'
									controls>
									<source
										src='/assets/envinitiative/rgb.mp4'
										type='video/mp4'></source>
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
