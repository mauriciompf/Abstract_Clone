const searchButton = document.querySelector("#seach-btn");
const menu = document.querySelector("#menu-buttons");
const inputSearch = document.createElement("input");
inputSearch.setAttribute("type", "search");
inputSearch.classList.add("animate-AnimSearch", "w-72", "relative", "p-2", "rounded-md", "text-black", "max-[700px]:hidden");

searchButton.addEventListener("click", () => {
	menu.appendChild(inputSearch);
	searchButton.before(inputSearch);
	inputSearch.classList.toggle("hidden");
	inputSearch.select();
});