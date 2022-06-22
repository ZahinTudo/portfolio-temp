import React, { useEffect, useState } from "react";
import "./Publications.css";
import PublicationsDetailsCarousel from "./PublicationsDetailsCarousel/PublicationsDetailsCarousel";
import PublicationsImageCarousel from "./PublicationsImageCarousel/PublicationsImageCarousel";

export default function Publications() {
	const [Data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [TotalPage, setTotalPage] = useState(Data.length);
	const [slideto, setSlideto] = useState(0);
	useEffect(() => {
		fetch("/publications.json")
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setTotalPage(result.length);
			});
	}, []);
	console.log(slideto);
	return (
		<section id='publications' className='publications fadeEntry'>
			<div className='custom_container_left'>
				<h2 className='Head_title'>Publications</h2>
				<p className='short_brief'>
					My musings on Economics, Psychology and Environment,
					submitted to academic <br /> competitions and published on
					various platforms.
				</p>
				<div className='d-flex flex-wrap my-4'>
					<div className='col-12 col-md-6 detail_cards'>
						<div style={{ cursor: "grab" }}>
							<PublicationsDetailsCarousel
								data={Data}
								setPage={setPage}
								slideto={slideto}
								setslide={setSlideto}
							/>
						</div>
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
						<div style={{ cursor: "grab" }}>
							<PublicationsImageCarousel
								data={Data}
								setPage={setPage}
								slideto={slideto}
								setslide={setSlideto}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
