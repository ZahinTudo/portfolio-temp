import React, { useEffect, useState } from "react";
import "./Gallary.css";
export default function Gallary() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/gallary.json")
			.then((res) => res.json())
			.then((result) => setData(result));
	}, []);
	return (
		<section id='gallary' className='gallary '>
			<div className='custom_container'>
				<h3 className='title my-4'>World through my lens</h3>
				{/* <p className='sub-title'>
					The world as I see it through the lens of my camera.
				</p> */}
			</div>
			<div className='gallary_wrapper custom_container'>
				{data.map((item, ind) => (
					<span key={ind} className='position-relative img'>
						<img src={item.image} alt='' className='img-fluid' />
						<div className='image_overlay position-absolute '>
							<a
								className='d-flex flex-column'
								target='_blank'
								href='https://www.instagram.com/thebigpicture05/'>
								<span>
									Instagram{" "}
									<span>
										<img
											src='/assets/linkArrow.png'
											alt=''
											className='img-fluid'
										/>
									</span>
								</span>
								<span>@thebigpicture05</span>
							</a>
						</div>
					</span>
				))}
			</div>
		</section>
	);
}
