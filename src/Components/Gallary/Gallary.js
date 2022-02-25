import React, { useEffect, useState } from "react";
import "./Gallary.css";
export default function Gallary() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/gallary.json")
			.then((res) => res.json())
			.then((result) => setData(result));
	}, []);
	return (
		<div className='gallary '>
			<div className='custom_container'>
				<h3 className='title'>Photography Gallery</h3>
				<p className='sub-title'>
					Earth is the third planet from the Sun and the only
					astronomical object known to harbor <br /> life. According
					to radiometric dating estimation and other evidence, Earth
					formed over 4.5 <br />
					billion years ago.
				</p>
			</div>
			<div className='gallary_wrapper custom_container'>
				{data.map((item, ind) => (
					<span key={ind}>
						<img src={item.image} alt='' className='img-fluid' />
					</span>
				))}
			</div>
		</div>
	);
}
