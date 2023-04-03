(function () {
	const burgerItem = document.querySelector(".burger");
	const menu = document.querySelector(".header-nav-wrap");
	const menuCloseItem = document.querySelector(".header-nav-close");
	burgerItem.addEventListener("click", () => {
		menu.classList.add("header-nav-wrap-active");
	});
	menuCloseItem.addEventListener("click", () => {
		menu.classList.remove("header-nav-wrap-active");
	});
})();
