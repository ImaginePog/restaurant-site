import elementFactory from "./elementFactory.js";
import loadPageContent from "./loadPageContent.js";

import cityLogo from "../assets/images/city-wok-logo.jpg";
import githubLogo from "../assets/images/github-mark.svg";

//CREATES HEADER AND RETURNS IT
function createHeader() {
	//ALL THE PAGES OF THE SITE
	const pageIds = ["home", "menu", "contact"];

	const header = elementFactory("header", { name: "id", value: "header" });

	const logoContainer = elementFactory("div", {
		name: "class",
		value: "logo-container",
	});

	const logoImg = elementFactory(
		"img",
		{ name: "src", value: cityLogo },
		{ name: "class", value: "logo-img" }
	);

	logoContainer.appendChild(logoImg);

	const nav = elementFactory("nav", { name: "class", value: "nav" });

	const pagesList = elementFactory("ul", {
		name: "class",
		value: "nav-list",
	});

	pageIds.forEach((id) => {
		const item = elementFactory("li");
		const btn = elementFactory(
			"button",
			{ name: "class", value: "nav-btn" },
			{ name: "text", value: `${id}` }
		);

		btn.dataset.navId = `${id}`;

		item.appendChild(btn);
		pagesList.appendChild(item);
	});

	nav.appendChild(pagesList);

	header.append(logoContainer, nav);

	return header;
}

//CREATES THE MAIN CONTAINER FOR APPENDING CONTENT AND RETURNS IT
function createMainContainer() {
	const mainContainer = elementFactory("main", {
		name: "id",
		value: "main-container",
	});

	return mainContainer;
}

//CREATES FOOTER AND RETURNS IT
function createFooter() {
	const footer = elementFactory("footer", {
		name: "id",
		value: "footer",
	});

	const meContainer = elementFactory(
		"a",
		{ name: "href", value: "https://github.com/ImaginePog" },
		{
			name: "class",
			value: "me-container",
		},
		{
			name: "class",
			value: "credit",
		}
	);

	const me = elementFactory(
		"p",
		{ name: "class", value: "me" },
		{ name: "text", value: "Made by Imagine" }
	);

	const githubContainer = elementFactory("div", {
		name: "class",
		value: "github-container",
	});

	const github = elementFactory(
		"img",
		{ name: "src", value: githubLogo },
		{ name: "class", value: "logo-img" }
	);

	githubContainer.appendChild(github);

	meContainer.append(me, githubContainer);

	const creditContainer = elementFactory("div", {
		name: "class",
		value: "credit-container",
	});

	const creditLink = elementFactory(
		"a",
		{ name: "href", value: "https://www.southparkstudios.com/" },
		{ name: "class", value: "credit" },
		{ name: "text", value: "Credits to South Park" }
	);

	creditContainer.appendChild(creditLink);

	footer.append(meContainer, creditContainer);

	return footer;
}

//LOADS THE MAIN LAYOUT OF THE SITE AND APPENDS IT TO THE PAGE
function loadLayout() {
	const pageContainer = document.querySelector("#page-container");

	const header = createHeader();

	const mainContainer = createMainContainer();

	const footer = createFooter();

	pageContainer.append(header, mainContainer, footer);
}

export default loadLayout;
