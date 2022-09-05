import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

gsap.from(".btn", {
	y: -50,
	delay: 0.1,
	ease: "bounce.out",
	duration: 1,
});
gsap.from(".header__more-info", {
	y: -50,
	delay: 0,
	duration: 1,
});

const aboutObserver = new IntersectionObserver(
	(entries, observer) => {
		if (entries[0].isIntersecting) {
			gsap.from(".about__item", {
				x: 100,
				opacity: 0,
				delay: 0.5,
				stagger: 1,
			});
		}
	},
	{ rootMargin: "50px" }
);

const about = document.querySelector(".about__items");
aboutObserver.observe(about);

const infoObserver = new IntersectionObserver(
	(entries, observer) => {
		if (entries[0].isIntersecting) {
			gsap.to(".info__descr", {
				x: -75,
				opacity: 1,
				delay: 0.5,
			});
		}
	},
	{ rootMargin: "-150px" }
);

const info = document.querySelector(".info__descr");
infoObserver.observe(info);

const learnObserver = new IntersectionObserver(
	(entries, observer) => {
		if (entries[0].isIntersecting) {
			gsap.from(".learn__item", {
				x: -100,
				opacity: 0,
				delay: 0.5,
				stagger: 1,
			});
		}
	},
	{ rootMargin: "50px" }
);

const learn = document.querySelector(".learn__list");
learnObserver.observe(learn);
