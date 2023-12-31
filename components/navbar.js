document.addEventListener("DOMContentLoaded", function () {
	var navbarTemplate = `
<div class="topnav" id="myTopnav">
    <a href="#" class="logo"><img src="https://www.nexavix.com/images/nexavix_logo.png" alt="Company's logo" style="width: 300px; height: 48px;"></a>
    <a href="#home" class="active">HOME</a>
    <a href="pages/about.html" >ABOUT</a>
    <a href="pages/contact.html">CONTACT</a>
    <a href="pages/services.html" >SEVICES</a>
    <a href="pages/wholesale.html" class="special-link">  WHOLESALE</a>
    <a href="pages/Demo.html" class="special-link">  FREE DEMO</a>
    <a href="pages/trial.html" class="special-link">  FREE TRIAL</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
</div>
    `;

	// Find the navbar placeholder and replace it with the navbar template
	var placeholder = document.querySelector(".navbar-placeholder");
	if (placeholder) {
		placeholder.outerHTML = navbarTemplate;
	}

	// Logic to add "active" class to the correct link
	var currentPage = document.body.getAttribute("data-current-page");
	if (currentPage) {
		var activeLink = document.querySelector(
			`.nav-link[data-page="${currentPage}"]`
		);
		if (activeLink) {
			activeLink.classList.add("active");
		}
	}
});
