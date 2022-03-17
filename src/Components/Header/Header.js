import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import useWindowResize from "../../customHooks/useWindowResize";
export default function Header() {
	const hoverbtn = useRef();
	const [hover, setHover] = useState(null);
	const { width } = useWindowResize();
	// alert(width <= 600);
	const [clicked, setClicked] = useState(false);
	const [timeout, settimeout] = useState(null);
	useEffect(() => {
		setHover(hoverbtn.current);
	}, [hoverbtn]);

	let time = null;
	// console.log(hover);
	// console.log(document.getElementsByClassName("hoverBtn")[0]);

	const clickHandle = (e) => {
		if (width > 600 && hover) {
			hover.addEventListener("mouseleave", () => {
				clearTimeout(timeout);
				clearTimeout(time);

				time = setTimeout(() => {
					setClicked(!clicked);
				}, 4000);
				settimeout(time);
			});
		}
	};
	const hoverHandle = (e) => {
		setClicked(!clicked);
	};
	const closeNav = (e) => {
		setClicked(!clicked);
	};

	return (
		<div
			className=' header d-flex justify-content-end position-sticky'
			style={{ zIndex: "500" }}>
			<div
				ref={hoverbtn}
				onClick={hoverHandle}
				onMouseLeave={clickHandle}
				onMouseOver={() => {
					clearTimeout(timeout);
				}}
				className='hoverBtn   '>
				<span
					className={`small-btn ${
						clicked ? "d-none" : ""
					} btn btn-dark border-0 py-4 px-5`}>
					<span className='me-3'>Menu</span>
					<span>
						<img
							src='/assets/menu_dots.png'
							alt=''
							className='img-fluid'
						/>
					</span>
				</span>
				<span
					className={`big-menu ${
						clicked ? "" : "d-none"
					}  bg-dark  py-4 px-5 `}>
					<h1
						onClick={closeNav}
						style={{ cursor: "pointer" }}
						className='close text-white d-flex d-md-none justify-content-end p-0 m-0'>
						&times;
					</h1>
					<div className='d-flex flex-column flex-md-row align-items-center flex-wrap justify-content-evenly  text-white h-100'>
						<a
							onClick={closeNav}
							href='#aboutme'
							className='navlink '>
							About
						</a>
						<a
							onClick={closeNav}
							href='#backToSchool'
							className='navlink '>
							Featured
						</a>
						<a
							onClick={closeNav}
							href='#researchWork'
							className='navlink '>
							Research
						</a>
						<a
							onClick={closeNav}
							href='#envinitiative'
							className='navlink '>
							Initiatives
						</a>
						<a
							onClick={closeNav}
							href='#publications'
							className='navlink '>
							Publications
						</a>
						<a
							onClick={closeNav}
							href='#gallary'
							className='navlink '>
							Photography
						</a>
						<a
							onClick={closeNav}
							href='#media'
							className='navlink '>
							Media
						</a>
					</div>
				</span>
			</div>
		</div>
	);
}
