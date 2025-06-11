export default class NavBar {
    constructor() {
        this.headerLogo = document.createElement("div");
        this.headerLogo.classList.add("header-logo");
        this.headerLogo.innerHTML = `
            <a href="/index.html"><img class="logo-img" src="src/images/loka-ukalogo.png" alt="company logo"></a>
        `;

        this.navElement = document.createElement("nav");
        this.navElement.innerHTML = `
            <ul>
                <li><a href="/">Top Recipes</a></li>
                <li><a href="/newRecipe.html">New Recipe</a></li>
                <li><a href="/searchRecipe.html">Search Recipe</a></li>
                <li><a href="/">My List</a></li>
            </ul>
        `;
    }

    // Método para obtener el elemento del logo
    getHeaderLogo() {
        return this.headerLogo;
    }

    // Método para obtener el elemento de navegación
    getNavElement() {
        return this.navElement;
    }
}
