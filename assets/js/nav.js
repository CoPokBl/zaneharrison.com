/*

This file injects basic navigation into the page.
Every normal page that should contain navigation and footer
elements should include this file using a script tag.

The header and footer tags should look like:
<div id="site-nav"></div>
        and
<div id="site-footer"></div>

This file requires that all HTML files importing it has a meta tag:
<meta name="ptr" id="pathToRoot" content="../">
That contains the path to the root of the website.

Depends on:
- global.js

 */

// Get where the root directory is in relation to the HTML file
let pathToRoot;
const ptrObj = document.getElementById("pathToRoot");
if (ptrObj === null) {
    console.warn("No meta tag with id 'pathToRoot' found. It is highly recommended to have this tag. (Defaulting to '../')");
    pathToRoot = "../";
} else {
    pathToRoot = ptrObj.getAttribute("content");
    console.log("Root: " + pathToRoot);
}

// Inject navbar into site at div with id 'site-nav'
const nav = document.getElementById('site-nav');

if (nav == null) {
    // Navbar isn't found
    console.log('Navbar element doesn\'t exist');
} else {
    // Put the navbar code into this element
    let navBarCode = `

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="%%root%%">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="%%root%%projects/">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://serble.net">Serble</a>
      </li>
    </ul>
    <form class="form-inline mt-2 mt-md-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" id="searchInput">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onclick="searchButtonClick();">Search</button>
    </form>
  </div>
</nav>

`;

    // Replace %%root%% with the path to the root of the website
    navBarCode = replaceAll(navBarCode, "%%root%%", pathToRoot);

    // Inject the navbar code into the navbar element
    nav.innerHTML = navBarCode;

    console.log("Navbar injected");
}

// Inject footer into site at div with id 'site-footer'
const footer = document.getElementById('site-footer');

if (footer == null) {
    // Footer isn't found
    console.log('Footer element doesn\'t exist');
} else {
    // Put the footer code into this element
    let footerCode = `

<!-- Footer -->

    `;

    // Replace %%root%% with the path to the root of the website
    footerCode = replaceAll(footerCode, "%%root%%", pathToRoot);

    // Inject the navbar code into the navbar element
    footer.innerHTML = footerCode;

    console.log("Footer injected");
}

console.log("Navbar and footer injection complete");