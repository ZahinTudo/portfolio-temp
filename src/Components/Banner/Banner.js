import React from "react";
import "./Banner.css";

export default function Banner() {
	return (
		<section className='custom_container d-flex flex-wrap banner  justify-content-center align-items-center'>
			<div className='col-12 col-md-5'>
				<div>
					<img
						src='/assets/banner.png'
						alt=''
						className='img-fluid'
					/>
				</div>
			</div>
			<div className='col-12 col-md-7 px-md-3 d-flex justify-content-md-center'>
				<div>
					<h3 className='name my-0'>Inaayat Passi</h3>
					<p className='short-description mt-3'>
						<p className='animation-wrapper'>
							<p style={{ color: "#0B132B" }}>
								Young Environmentalist
							</p>
							<p style={{ color: "#0B132B" }}>
								Avid Photographer
							</p>
							<p style={{ color: "#0B132B" }}>
								Curious Researcher
							</p>
						</p>
					</p>
				</div>
			</div>
		</section>
	);
}
