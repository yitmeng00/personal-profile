// element toggle function
const sidebarToggleFunc = function (sidebarElement) {
    sidebarElement.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-navbar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    sidebarToggleFunc(sidebar);
});

// page navigation variables
const pageLinks = document.querySelectorAll("[data-nav-link]");
const pageSections = document.querySelectorAll("[data-page]");

// handle page navigation
const navigateToPage = function (page) {
    for (let i = 0; i < pageSections.length; i++) {
        if (page.toLowerCase() === pageSections[i].dataset.page) {
            pageSections[i].classList.add("active");
            scrollToTop();
        } else {
            pageSections[i].classList.remove("active");
        }
    }
};

// handle active classes for page links
const setActivePageLink = function (link) {
    for (let i = 0; i < pageLinks.length; i++) {
        if (link === pageLinks[i]) {
            pageLinks[i].classList.add("active");
        } else {
            pageLinks[i].classList.remove("active");
        }
    }
};

// add click event to all nav links
for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener("click", function () {
        navigateToPage(this.innerHTML);
        setActivePageLink(this);
    });
}

// scroll to top of page
const scrollToTop = function () {
    window.scrollTo(0, 0);
};
