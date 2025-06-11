import NavBar from './nav.mjs';

// Crear una instancia de la clase NavBar
const navBar = new NavBar();

// Obtener el elemento del logo y de navegación
const headerLogo = navBar.getHeaderLogo();
const navElement = navBar.getNavElement();

// Obtener el elemento del encabezado (header) donde deseas incluir los elementos
const header = document.getElementById('header'); // Asumiendo que tienes un elemento con id="header"

// Añadir elementos al header
header.appendChild(headerLogo);
header.appendChild(navElement);