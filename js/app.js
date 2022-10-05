// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

function openPage(pageName, elmnt, border, fontw) {
  // Hide all elements with class="tabContent-box" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent-box");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.opacity = "0";
  }

  // Remove the color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderBottom = "";
    tablinks[i].style.fontWeight = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.opacity = "1";

  // Add the specific border to the button used to open the tab content
  elmnt.style.borderBottom = border;
  elmnt.style.fontWeight = fontw;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
