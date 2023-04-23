import elementFactory from "./elementFactory";

import restaurantImg from "../assets/city-wok.jpg";

//CREATES THE HOME PAGE CONTENT AND RETURNS IT
export default function createHome() {
	const content = elementFactory("section", {
		name: "class",
		value: "content",
	});

	const mainContent = elementFactory("div", {
		name: "class",
		value: "main-content",
	});

	const mainBackground = elementFactory(
		"img",
		{ name: "src", value: restaurantImg },
		{ name: "class", value: "background-img" }
	);

	const introContainer = elementFactory("div", {
		name: "class",
		value: "intro-container",
	});

	const intro = elementFactory(
		"h1",
		{ name: "class", value: "intro" },
		{ name: "text", value: "City Wok" }
	);

	const greet = elementFactory(
		"p",
		{ name: "class", value: "greet" },
		{
			name: "text",
			value: "Welcome to City Wok, can we take your order please?",
		}
	);

	const menuBtn = elementFactory(
		"button",
		{
			name: "class",
			value: "menu-btn",
		},
		{
			name: "class",
			value: "btn",
		},
		{ name: "text", value: "City Menu" }
	);

	introContainer.append(intro, greet, menuBtn);
	mainContent.append(mainBackground, introContainer);

	const otherContent = elementFactory("section", {
		name: "class",
		value: "other-content",
	});

	const airlineIntro = elementFactory(
		"p",
		{
			name: "class",
			value: "airline-intro",
		},
		{ name: "text", value: "Also check out our airline services!" }
	);

	const airlineBtn = elementFactory(
		"button",
		{
			name: "class",
			value: "airline-btn",
		},
		{
			name: "class",
			value: "btn",
		},
		{ name: "text", value: "City Airline" }
	);

	otherContent.append(airlineIntro, airlineBtn);

	content.append(mainContent, otherContent);
	return content;
}
