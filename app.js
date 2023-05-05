const wrapper = document.querySelector(".sliderWrap");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
	{
		id: 1,
		title: "Air Force",
		price: 149,
		colors: [
			{
				code: "black",
				img: "./img/air.png",
			},
			{
				code: "darkblue",
				img: "./img/air2.png",
			},
		],
	},
	{
		id: 2,
		title: "Jordan Retro 1 High OG",
		price: 299,
		colors: [
			{
				code: "lightgray",
				img: "./img/jordan.png",
			},
			{
				code: "green",
				img: "./img/jordan2.png",
			},
		],
	},
	{
		id: 3,
		title: "Blazer",
		price: 139,
		colors: [
			{
				code: "lightgray",
				img: "./img/blazer.png",
			},
			{
				code: "green",
				img: "./img/blazer2.png",
			},
		],
	},
	{
		id: 4,
		title: "Crater",
		price: 129,
		colors: [
			{
				code: "black",
				img: "./img/crater.png",
			},
			{
				code: "lightgray",
				img: "./img/crater2.png",
			},
		],
	},
	{
		id: 5,
		title: "Hippie",
		price: 99,
		colors: [
			{
				code: "gray",
				img: "./img/hippie.png",
			},
			{
				code: "black",
				img: "./img/hippie2.png",
			},
		],
	},
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColours = document.querySelectorAll(".colour");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		//change slide
		wrapper.style.transform = `translateX(${-100 * index}vw)`;
		//change product
		choosenProduct = products[index];
		//change current product text
		currentProductTitle.textContent = choosenProduct.title;
		currentProductPrice.textContent = "$" + choosenProduct.price;
		currentProductImg.src = choosenProduct.colors[0].img;

		//change colour of boxes
		currentProductColours.forEach((colour, index) => {
			colour.style.backgroundColor = choosenProduct.colors[index].code;
		});
	});
});

currentProductColours.forEach((colour, index) => {
	colour.addEventListener("click", () => {
		currentProductImg.src = choosenProduct.colors[index].img;
	});
});

currentProductSizes.forEach((size, index) => {
	size.addEventListener("click", () => {
		currentProductSizes.forEach((size) => {
			size.style.backgroundColor = "white";
			size.style.color = "black";
		});
		size.style.backgroundColor = "black";
		size.style.color = "white";
	});
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
	payment.style.display = "flex";
});
close.addEventListener("click", () => {
	payment.style.display = "none";
});
