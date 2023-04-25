import elementFactory from "./elementFactory";

import cityWokOwner from "../assets/images/City-wok-guy.png";

//CREATES CONTACT INFO AND RETURNS IT
function createContactInfo() {
	const infoContainer = elementFactory(
		"div",
		{
			name: "class",
			value: "contact",
		},
		{ name: "class", value: "light-border" }
	);

	const services = elementFactory("h2", {
		name: "text",
		value: "For Ordering, Takeaway or Reservation!!",
	});

	const infoText = elementFactory("p", {
		name: "text",
		value: "Phone No: XXX-XXX-XXX",
	});

	const inquiries = elementFactory("p", {
		name: "text",
		value: "For other inquiries: CityEmail@123.com",
	});

	const ad = elementFactory(
		"p",
		{
			name: "text",
			value: "Try our city beef!!",
		},
		{ name: "class", value: "ad" }
	);

	infoContainer.append(services, infoText, inquiries, ad);
	return infoContainer;
}

//CREATES THE CONTACT PAGE CONTENT AND RETURNS IT
export default function createContact() {
	const content = elementFactory("section", {
		name: "class",
		value: "content",
	});

	const contactContainer = elementFactory(
		"div",
		{
			name: "class",
			value: "contact-container",
		},
		{
			name: "class",
			value: "content-container",
		}
	);

	const title = elementFactory(
		"h1",
		{ name: "class", value: "contact-title" },
		{ name: "class", value: "title" },
		{ name: "text", value: "Contact Us" }
	);

	const ownerContainer = elementFactory("div", {
		name: "class",
		value: "owner-container",
	});

	const ownerImgContainer = elementFactory(
		"div",
		{
			name: "class",
			value: "owner-img-container",
		},
		{ name: "class", value: "light-border" }
	);

	const ownerImg = elementFactory(
		"img",
		{ name: "src", value: cityWokOwner },
		{ name: "class", value: "img" },
		{
			name: "class",
			value: "owner-img",
		}
	);

	ownerImgContainer.appendChild(ownerImg);

	const ownerInfoContainer = elementFactory("div", {
		name: "class",
		value: "owner-info-container",
	});

	const owner = elementFactory(
		"p",
		{ name: "text", value: "Tuong Lu Kim" },
		{ name: "class", value: "owner" }
	);

	const ownerInfo = elementFactory("p", {
		name: "text",
		value: "The owner of City Wok, ",
	});

	const ownerLink = elementFactory(
		"a",
		{
			name: "href",
			value: "https://www.southparkstudios.com/wiki/Tuong_Lu_Kim",
		},
		{ name: "class", value: "about-link" },
		{ name: "text", value: "for more info." }
	);

	ownerInfo.appendChild(ownerLink);

	ownerInfoContainer.append(owner, ownerInfo);

	ownerContainer.append(ownerImgContainer, ownerInfoContainer);

	const contactInfo = createContactInfo();

	contactContainer.append(title, ownerContainer, contactInfo);

	content.append(contactContainer);

	return content;
}
