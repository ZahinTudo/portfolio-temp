import React, { useEffect, useState } from "react";
import ResearchDetailsCarousel from "./ResearchDetailsCarousel/ResearchDetailsCarousel";
import ResearchImageCarousel from "./ResearchImageCarousel/ResearchImageCarousel";
import "./ResearchWork.css";

export default function ResearchWork() {
	const [Data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [TotalPage, setTotalPage] = useState(Data.length);
	useEffect(() => {
		fetch("/researchWork.json")
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setTotalPage(result.length);
			});
	}, []);

	return (
		<section id='researchWork' className='researchWork py-5'>
			<div className='custom_container_left'>
				<h2 className='Head_title'>Research Works</h2>
				<div className='d-flex flex-wrap'>
					<div className='col-12 col-md-6 detail_cards'>
						<ResearchDetailsCarousel
							data={Data}
							setPage={setPage}
						/>
						<div className='my-4'>
							<span
								className='research-prev-btn'
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
								className='research-next-btn'
								style={{ cursor: "pointer" }}>
								<img
									src='/assets/rightArrow.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</div>
					</div>
					<div className='col-12 col-md-6 imagecarousel'>
						<ResearchImageCarousel data={Data} setPage={setPage} />
					</div>
				</div>
			</div>
		</section>
	);
}
