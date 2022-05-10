import React from "react";
import ModalUrl from "../../Modal/ModalUrl";
import Modal from "../../Modal/ModalUrl";
import "./DetailsCard.css";

export default function ({ item }) {
	// console.log(item);
	const { title, topic, brief, link } = item;
	const [modalShow, setModalShow] = React.useState(false);
	const [url, setUrl] = React.useState("");
	// const [title, setTitle] = React.useState("");

	return (
		<>
			<ModalUrl
				show={modalShow}
				onHide={() => setModalShow(false)}
				url={url}
				title={title}
			/>
			<div className='pe-5'>
				<h3 className='title'>{title}</h3>
				<p className=''>{topic}</p>
				<p>{brief}</p>

				<a
					onClick={() => {
						setModalShow(true);
						setUrl(link);
						// setTitle(title);
					}}
					// href={link}
					// target='_blank'
					rel='noreferrer'
					className='link d-inline-block'
					style={{ cursor: "pointer" }}>
					<span className='me-2'>View Full Research Paper</span>
					<span>
						<img
							style={{ width: "15px" }}
							src='/assets/blackLinkArrow.png'
							alt=''
							className='img-fluid'
						/>
					</span>
				</a>
			</div>
		</>
	);
}
