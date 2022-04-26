import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footer-resume'>
				<div className='custom_container  d-flex flex-wrap justify-content-between align-items-center'>
					<div className='col-12 col-md-6 '>
						<h3 className='title'>Resume</h3>
					</div>
					<div className='col-12 col-md-6 text-md-end ps-2 '>
						<a
							href='/assets/resume.pdf'
							target='_blank'
							rel='noopener noreferrer'>
							<span className='btn btn-dark px-5 py-2 me-3'>
								View
							</span>
						</a>
						<a href='/assets/resume.pdf' download>
							<span className='btn btn-outline-dark px-5 py-2'>
								Download
							</span>
						</a>
					</div>
				</div>
			</div>
			<div className='custom_container_left copyright'>
				2022 Copyright - Inaayat Passi. All rights reserved.
			</div>
		</div>
	);
}
