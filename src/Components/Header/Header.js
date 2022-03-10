import React, { useState } from "react";
import "./Header.css";
export default function Header() {
	const [clicked, setClicked] = useState(false);
	const [timeout, settimeout] = useState(null);
	const clickHandle = (e) => {
		setClicked(true);
		// alert("left");
		clearTimeout(timeout);

		const time = setTimeout(() => {
			const menu = document.getElementsByClassName("big-menu")[0];
			menu.classList.add("d-none");
			const small = document.getElementsByClassName("small-btn")[0];
			small.classList.remove("d-none");
		}, 4000);
		settimeout(time);
	};
	const hoverHandle = (e) => {
		const menu = document.getElementsByClassName("big-menu")[0];
		menu.classList.remove("d-none");
		const small = document.getElementsByClassName("small-btn")[0];
		small.classList.add("d-none");
	};

	return (
		<div
			className=' header d-flex justify-content-end position-sticky'
			style={{ zIndex: "500" }}>
			<span
				onClick={hoverHandle}
				onMouseLeave={clickHandle}
				onMouseOver={() => clearTimeout(timeout)}
				className='hoverBtn   '>
				<span className='small-btn btn btn-dark border-0 py-4 px-5'>
					<span className='me-3'>Menu</span>
					<span>
						<img
							src='/assets/menu_dots.png'
							alt=''
							className='img-fluid'
						/>
					</span>
				</span>
				<span className='big-menu d-none  bg-dark  py-4 px-5 '>
					<div className='d-flex flex-column flex-md-row align-items-center flex-wrap justify-content-evenly  text-white h-100'>
						<a
							onClick={clickHandle}
							href='#aboutme'
							className='navlink '>
							About
						</a>
						<a
							onClick={clickHandle}
							href='#backToSchool'
							className='navlink '>
							Featured
						</a>
						<a
							onClick={clickHandle}
							href='#researchWork'
							className='navlink '>
							Research
						</a>
						<a
							onClick={clickHandle}
							href='#envinitiative'
							className='navlink '>
							Initiatives
						</a>
						<a
							onClick={clickHandle}
							href='#publications'
							className='navlink '>
							Publications
						</a>
						<a
							onClick={clickHandle}
							href='#gallary'
							className='navlink '>
							Photography
						</a>
						<a
							onClick={clickHandle}
							href='#media'
							className='navlink '>
							Media
						</a>
					</div>
				</span>
			</span>
		</div>
	);
}
