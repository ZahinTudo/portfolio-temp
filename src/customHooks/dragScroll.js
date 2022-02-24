// import React from "react";
import { useEffect } from "react";

export default function dragScroll(component) {
	useEffect(() => {
		const slider = document.getElementsByClassName(component)[0];

		let down = false;
		let scrollLeft = 0;
		let x = 0;

		slider.addEventListener("mousedown", (e) => {
			e.preventDefault();
			down = true;
			scrollLeft = slider.scrollLeft;
			x = e.clientX;
			slider.classList.add("active");
		});
		slider.addEventListener("mouseleave", () => {
			down = false;
			slider.classList.remove("active");
		});
		slider.addEventListener("mouseup", () => {
			slider.classList.remove("active");
			down = false;
		});
		slider.addEventListener("mousemove", (e) => {
			e.preventDefault();
			if (down) {
				slider.scrollLeft = scrollLeft + x - e.clientX;
			}
		});
	}, []);
	return 0;
}
