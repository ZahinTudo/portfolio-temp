import { useEffect } from "react";

export default function UseScrolleffect() {
	useEffect(() => {
		let autoScrollHori = document.getElementsByClassName(
			"media_image_wrapper"
		)[0];

		let check = 1;
		const scrollInterval = () => {
			let width = autoScrollHori.scrollLeftMax;

			const left = autoScrollHori.scrollLeft;
			if (left === width) {
				// autoScrollHori.scrollLeft = 0;
				check = 0;
			}
			// console.log(left, width);
			if (left === 0) check = 1;
			if (check == 1) autoScrollHori.scrollTo(left + 1, 0);
			else {
				autoScrollHori.scrollTo(left - 1, 0);
			}
		};
		let interval = setInterval(scrollInterval, 15);
		autoScrollHori.addEventListener("mouseover", () => {
			clearInterval(interval);
		});
		autoScrollHori.addEventListener("mouseleave", () => {
			interval = setInterval(scrollInterval, 15);
		});

		document.addEventListener("scroll", () => {
			// console.log(window.pageYOffset);
			const effects = document.getElementsByClassName("fadeEntry");
			// console.log(effects);
			[...effects].map((items) => {
				const windowBottom =
					window.pageYOffset + window.innerHeight * 0.7;
				const itemTop = items.offsetTop;
				// const diff = items.offsetTop - window.pageYOffset;
				// console.log("val=", items.offsetTop, window.pageYOffset, diff);
				if (windowBottom > itemTop) {
					const style = {
						opacity: "1",
						transform: "translate(0,0)",
					};
					Object.assign(items.style, style);
				}
				// else if (windowBottom < itemTop) {
				//   const style = {
				//     opacity: "0",
				//     transform: "translate(0,50px)",
				//   };
				//   Object.assign(items.style, style);
				// }
			});
		});
	}, []);
	return 0;
}
