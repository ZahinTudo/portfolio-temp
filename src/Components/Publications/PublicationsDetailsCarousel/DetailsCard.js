import React from "react";
import "./DetailsCard.css";

export default function ({ item }) {
	console.log(item);
	const { title, topic, brief, link } = item;

	return (
		<div className='pe-5'>
			<h3 className='title '>{title}</h3>
			<p className=''>{topic}</p>
			<p className='my-3 pe-5'>{brief}</p>
			<a
				href={link}
				target='_blank'
				rel='noreferrer'
				className='link  align-items-center d-inline-flex'>
				<span className='me-2'>View Full Research Paper</span>
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
	);
}
