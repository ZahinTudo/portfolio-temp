import React, { useEffect, useState } from "react";
import "./Publications.css";
import PublicationsDetailsCarousel from "./PublicationsDetailsCarousel/PublicationsDetailsCarousel";
import PublicationsImageCarousel from "./PublicationsImageCarousel/PublicationsImageCarousel";

export default function Publications() {
	const [Data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [TotalPage, setTotalPage] = useState(Data.length);
	useEffect(() => {
		fetch("/publications.json")
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setTotalPage(result.length);
			});
	}, []);

	return (
		<section id='publications' className='publications py-5'>
			<div className='custom_container_left'>
				<h2 className='Head_title'>Essays & Publications</h2>
				<p className="short_brief">
					My musings on Economics, Psychology and Environment,
					submitted to academic <br /> competitions and published on various
					platforms.
				</p>
				<div className='d-flex flex-wrap my-4'>
					<div className='col-12 col-md-6 detail_cards'>
						<PublicationsDetailsCarousel
							data={Data}
							setPage={setPage}
						/>
						<div className='my-4'>
							<span
								className='publications-prev-btn'
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
								className='publications-next-btn'
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
						<PublicationsImageCarousel
							data={Data}
							setPage={setPage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
