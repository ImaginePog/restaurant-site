import elementFactory from "./elementFactory";

import shrimp from "../assets/images/shrimp.png";
import chicken from "../assets/images/chicken.png";
import beef from "../assets/images/beef.png";
import pork from "../assets/images/pork.png";

//CREATES THE MENU PAGE CONTENT AND RETURNS IT
export default function createMenu() {
	const menuItems = [
		{
			name: "shrimp",
			src: shrimp,
			credit: {
				name: "Farhad Ibrahimzade",
				link: "https://unsplash.com/photos/HNmcgpzPHag",
			},
		},
		{
			name: "chicken",
			src: chicken,
			credit: {
				name: "Mark DeYoung",
				link: "https://unsplash.com/photos/mjcJ0FFgdWI",
			},
		},
		{
			name: "beef",
			src: beef,
			credit: {
				name: "Orcun Orcan",
				link: "https://unsplash.com/photos/tLGAOnl4p28",
			},
		},
		{
			name: "pork",
			src: pork,
			credit: {
				name: "Karyna Panchenko",
				link: "https://unsplash.com/photos/YSfEC5DSy08",
			},
		},
	];

	const content = elementFactory("section", {
		name: "class",
		value: "content",
	});

	const menuContainer = elementFactory(
		"div",
		{
			name: "class",
			value: "menu-container",
		},
		{
			name: "class",
			value: "content-container",
		}
	);

	const title = elementFactory(
		"h1",
		{ name: "class", value: "menu-title" },
		{ name: "class", value: "title" },
		{ name: "text", value: "City Menu" }
	);

	const menu = elementFactory("div", { name: "class", value: "menu" });

	menuItems.forEach((item) => {
		const itemCard = elementFactory("div", {
			name: "class",
			value: "item-card",
		});

		const imgContainer = elementFactory(
			"div",
			{
				name: "class",
				value: "img-container",
			},
			{ name: "class", value: "light-border" }
		);

		const itemImg = elementFactory(
			"img",
			{ name: "src", value: item.src },
			{ name: "class", value: "img" }
		);

		const imgCredit = elementFactory(
			"a",
			{ name: "href", value: item.credit.link },
			{ name: "class", value: "img-credit" },
			{ name: "text", value: `Image by ${item.credit.name}` }
		);

		imgContainer.append(itemImg, imgCredit);

		const infoContainer = elementFactory("div", {
			name: "class",
			value: "info-container",
		});

		const itemTitle = elementFactory(
			"p",
			{
				name: "class",
				value: "item-title",
			},
			{ name: "text", value: `City ${item.name}` }
		);
		infoContainer.appendChild(itemTitle);

		itemCard.append(imgContainer, infoContainer);

		menu.appendChild(itemCard);
	});

	menuContainer.append(title, menu);

	content.append(menuContainer);

	return content;
}
