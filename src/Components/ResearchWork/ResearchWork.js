import React, { useEffect, useState } from "react";
import ModalUrl from "../Modal/ModalUrl";
import ResearchDetailsCarousel from "./ResearchDetailsCarousel/ResearchDetailsCarousel";
import ResearchImageCarousel from "./ResearchImageCarousel/ResearchImageCarousel";
import "./ResearchWork.css";

export default function ResearchWork() {
	const [Data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [TotalPage, setTotalPage] = useState(Data.length);
	const [slideto, setSlideto] = useState(0);
	const [modalShow, setModalShow] = React.useState(false);
	const [url, setUrl] = React.useState("");
	const [Title, setTitle] = React.useState("");
	useEffect(() => {
		fetch("/researchWork.json")
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				setTotalPage(result.length);
			});
	}, []);
	const handleModalPdfView = (title, link) => {
		setModalShow(true);
		setUrl(link);
		setTitle(title);
	};
	return (
		<section id='researchWork' className='researchWork fadeEntry'>
			<ModalUrl
				show={modalShow}
				onHide={() => setModalShow(false)}
				url={url}
				title={Title}
			/>
			<div className='custom_container'>
				<h2 className='Head_title'>Research Works</h2>
				<div className='d-flex justify-content-between flex-wrap'>
					{Data.map((item, ind) => (
						<div
							key={"research" + ind}
							className='position-relative'
							style={{ height: "400px" }}>
							<img
								className='img-fluid h-100'
								src={item.image}
								alt=''
								srcset=''
							/>
							<div
								className='position-absolute p-4 text-white w-100'
								style={{
									borderTopLeftRadius: "1.2rem",
									backgroundColor: "#00000096",
									bottom: 0,
									minHeight: "max-content",
									height: "12rem",
								}}>
								<div className='position-relative h-100'>
									<h3 className='title'>{item.title}</h3>
									<h5>Mentored by : {item.mentor}</h5>
									<span
										onClick={() =>
											handleModalPdfView(
												item.title,
												item.link
											)
										}
										className='text-white position-absolute'
										style={{
											bottom: 0,
											cursor: "pointer",
											textDecoration: "none",
											fontSize: "1.12rem",
										}}
										// href={item.link}
										target='_blank'
										rel='noopener noreferrer'>
										<span>Read Full</span>
										<img
											style={{ width: "1.3rem" }}
											className='img-fluid ms-3'
											src='/assets/linkArrow.png'
											alt=''
											srcset=''
										/>
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* <div className='d-flex flex-wrap'>
					<div className='col-12 col-md-6 detail_cards'>
						<div style={{ cursor: "grab" }}>
							<ResearchDetailsCarousel
								data={Data}
								setPage={setPage}
								slideto={slideto}
								setslide={setSlideto}
							/>
						</div>
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
					<div
						className='col-12 col-md-6 imagecarousel'
						style={{ cursor: "grab" }}>
						<ResearchImageCarousel
							data={Data}
							setPage={setPage}
							slideto={slideto}
							setslide={setSlideto}
						/>
					</div>
				</div> */}
			</div>
		</section>
	);
}
