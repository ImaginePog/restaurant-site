//ENTRY POINT

//STYLES
import "./styles/index.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";

//MODULES
import loadLayout from "./modules/loadLayout";
import loadPageContent from "./modules/loadPageContent";

//EVENT LISTENER FOR THE NAV BTNS
//LOADS PAGE USING THE PAGEID FROM THE CLICKED BTN
function navigate(e) {
	const clickedBtn = e.currentTarget;

	btns.forEach((btn) => {
		if (btn.classList.contains("selected")) btn.classList.remove("selected");
	});
	clickedBtn.classList.add("selected");

	loadPageContent(clickedBtn.dataset.navId);
}

//LOAD THE LAYOUT AT FIRST
loadLayout();

//DOM QUERIES AFTER LOADING PAGE
const btns = document.querySelectorAll(".nav-btn");

//ADD EVENT LISTENERS TO ALL THE BUTTONS

btns.forEach((btn) => {
	btn.addEventListener("click", navigate);

	//Add selected in initial load to home btn
	if (btn.dataset.navId === "home") {
		btn.click();
	}
});
