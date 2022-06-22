import React, { useState, useEffect } from "react";
import "./Eassys.css";
import ModalUrl from "../Modal/ModalUrl";

export default function Eassys() {
	const [Essays, setEssays] = useState([]);
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [modalShow, setModalShow] = React.useState(false);
	useEffect(() => {
		fetch("/Eassys.json")
			.then((res) => res.json())
			.then((result) => {
				setEssays(result);
			});
	}, []);
	const handleShowModal = (title, link) => {
		console.log(title, link);
		setModalShow(true);
		setTitle(title);
		setUrl(link);
	};
	return (
		<section className='Essays fadeEntry'>
			<ModalUrl
				show={modalShow}
				onHide={() => setModalShow(false)}
				url={url}
				title={title}
			/>
			<div className='custom_container'>
				<h3 className='Head_title'>Essays</h3>
				<div className=''>
					{Essays.map((item, ind) => {
						return (
							<div className='short_brief'>
								<span
									onClick={() =>
										handleShowModal(item.title, item.link)
									}
									style={{
										cursor: "pointer",
										display: "inline",
									}}>
									{item.title}
									<span className='ms-2'>
										<img
											src='/assets/rightArrow.png'
											className='img-fluid'
											alt=''
											srcset=''
										/>
									</span>
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
