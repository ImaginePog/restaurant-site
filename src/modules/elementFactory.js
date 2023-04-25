//CREATES ELEMENT WITH GIVEN ATTRIBUTES AND RETURNS IT
export default function elementFactory(elementName, ...attributes) {
	const genericElement = document.createElement(elementName);

	attributes.forEach((attribute) => {
		if (attribute.name === "text") {
			genericElement.innerText = attribute.value;
		} else if (attribute.name === "class") {
			genericElement.classList.add(attribute.value);
		} else {
			genericElement.setAttribute(attribute.name, attribute.value);
		}
	});

	return genericElement;
}
