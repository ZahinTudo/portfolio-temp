import React from "react";
import "./ResearchWork.css";

export default function ResearchWork() {
	return (
		<section className='researchWork'>
			<div className='custom_container'>
				<h2 className='Head_title'>Research Works</h2>
				<div className='d-flex flex-wrap'>
					<div className='col-12 col-md-6'>
						<h3 className='title'>
							Why do consumers get overwhelmed when there are so
							many choices?
						</h3>
						<p>
							Internation Journal of Social Science and Economic
							Research
						</p>
						<p>
							Physical space is often conceived in three linear
							dimensions, although modern physicists usually
							consider it, with time, to be part of a boundless
							four-dimensional continuum known as spacetime. The
							concept of space is considered to be of fundamental
							importance to an understanding of the physical
							universe. However, disagreement continues between
							philosophers over whether it is itself an entity, a
							relationship between entities, or part of a
							conceptual framework.
						</p>
						<p>
							<span>View Full Research Paper</span>
							<span>
								<img
									src='/assets/blackLinkArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</p>
						<div>
							<span>
								<img
									src='/assets/leftArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
							<span>1/2</span>
							<span>
								<img
									src='/assets/rightArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<img
							src='/assets/researchWork/research1.png'
							alt=''
							srcset=''
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
