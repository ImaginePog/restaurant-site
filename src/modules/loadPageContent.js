import createPageContent from "./createPageContent";

//CHANGES THE NAV BTN STATE THEN LOADS NEW PAGE CONTENT BASED ON THE GIVEN PAGE ID
export default function loadPageContent(pageId) {
	//CLEAR THE MAIN CONTAINER
	const mainContainer = document.querySelector("#main-container");
	mainContainer.textContent = "";

	//APPEND NEW CREATED PAGE CONTENT
	const page = createPageContent(pageId);
	mainContainer.appendChild(page);
}
