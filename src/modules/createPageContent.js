import createHome from "./createHome";
import createMenu from "./createMenu";
import createContact from "./createContact";

//CREATES PAGE CONTENT BASED ON GIVEN PAGE IDS AND RETURNS IT
export default function createPageContent(pageId) {
	let content;
	switch (pageId) {
		case "home":
			content = createHome();
			break;
		case "menu":
			content = createMenu();
			break;
		case "contact":
			content = createContact();
			break;
	}

	return content;
}
