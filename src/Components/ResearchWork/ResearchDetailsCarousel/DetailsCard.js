import React from "react";
import "./DetailsCard.css";

export default function ({ item }) {
	console.log(item);
	const { title, topic, brief, link } = item;

	return (
		<div className='pe-5'>
			<h3 className='title'>{title}</h3>
			<p className=''>{topic}</p>
			<p>{brief}</p>
			<a
				href={link}
				target='_blank'
				rel='noreferrer'
				className='link d-inline-block'>
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
	);
}
