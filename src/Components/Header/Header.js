import React from "react";
import "./Header.css";
export default function Header() {
	return (
		<div
			className=' header d-flex justify-content-end position-sticky'
			style={{ zIndex: "500" }}>
			<span className='hoverBtn   '>
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
				<span className='big-menu  bg-dark  py-4 px-5 '>
					<div className='d-flex flex-wrap justify-content-between  text-white'>
						<span className='navlink '>About</span>
						<span className='navlink '>Featured</span>
						<span className='navlink '>Research</span>
						<span className='navlink '>Initiatives</span>
						<span className='navlink '>Publications</span>
						<span className='navlink '>Photography</span>
						<span className='navlink '>Media</span>
					</div>
				</span>
			</span>
		</div>
	);
}
