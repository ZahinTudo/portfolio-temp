import React from "react";
import ModalUrl from "../../Modal/ModalUrl";
import "./DetailsCard.css";

export default function ({ item }) {
	// console.log(item);
	const { title, topic, brief, link } = item;
	const [modalShow, setModalShow] = React.useState(false);
	const [url, setUrl] = React.useState("");

	return (
		<>
			<ModalUrl
				show={modalShow}
				onHide={() => setModalShow(false)}
				url={url}
				title={title}
			/>
			<div className='pe-5'>
				<h3 className='title '>{title}</h3>
				<p className=''>{topic}</p>
				<p className='my-3 pe-5'>{brief}</p>
				<a
					onClick={() => {
						setModalShow(true);
						setUrl(link);
						// setTitle(title);
					}}
					// href={link}
					// target='_blank'
					rel='noreferrer'
					style={{ cursor: "pointer" }}
					className='link  align-items-center d-inline-flex'>
					<span className='me-2'>View Essay</span>
					<span>
						<img
							style={{ width: "16px" }}
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
