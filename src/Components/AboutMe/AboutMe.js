import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import Achievement from "./Achievement";

export default function AboutMe() {
	const [page, setPage] = useState(1);
	const [Data, setData] = useState([]);
	const [TotalPage, setTotalPage] = useState(Data.length);

	useEffect(() => {
		fetch("/achievement.json")
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setTotalPage(Math.ceil(result.length - 2));
			});
	}, []);
	return (
		<div className='aboutme py-5'>
			<div className='custom_container d-flex flex-wrap'>
				<div className='col-12 col-md-6'>
					<h1 className='title'>About Me</h1>
					<p className='self_brief'>
						Hi! My name is Inaayat Passi. I was born and raised in
						New Delhi, India, and now I study in the UK. Living in
						both countries and traveling across continents has
						opened my eyes to the diversity of the human experience,
						which I try to capture in my photographs. I’m also a
						passionate activist, advocating for sustainability and
						equality in education. I’m fascinated by psychology and
						economics, and love reading new and interesting articles
						in them. Welcome to my online space, where you get to
						know me through my projects, research, writing and
						photography account on Instagram.
					</p>
					<div className='d-flex justify-content-between align-items-center socials my-5'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.instagram.com/thebigpicture05/'>
							<span>Instagram</span>
							<span>
								<img
									src='/assets/blackLinkArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.instagram.com/thebigpicture05/'>
							<span>Email</span>
							<span>
								<img
									src='/assets/blackLinkArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.instagram.com/thebigpicture05/'>
							<span>Resume</span>
							<span>
								<img
									src='/assets/blackLinkArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</a>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='d-flex justify-content-center align-items-center '>
						<div className='w-75'>
							<img
								src='/assets/aboutme.png'
								alt=''
								className='img-fluid'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='achievement custom_container'>
				<h1 className='mb-5'>My Achievements</h1>
				<Achievement page={setPage} data={Data} />
				<div className='my-4'>
					<span
						className='achievement-prev-btn'
						style={{ cursor: "pointer" }}>
						<img
							src='/assets/leftArrow.png'
							alt=''
							className='img-fluid'
						/>
					</span>
					<span className='m-3 d-inline-block page'>
						{page}/{TotalPage}
					</span>
					<span
						className='achievement-next-btn'
						style={{ cursor: "pointer" }}>
						<img
							src='/assets/rightArrow.png'
							alt=''
							className='img-fluid'
						/>
					</span>
				</div>
			</div>
		</div>
	);
}
