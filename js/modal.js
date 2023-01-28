// MODAL
const modalCurrency = document.querySelector(".modal-currency--container");
const btnCurrency = document.querySelector(".euro");

const closeModalMenuLang = function () {
  modalLanguage.classList.add("hidden-modal");
  modalMenu.classList.add("hidden-modal");
};

btnCurrency.addEventListener("click", function () {
  modalCurrency.classList.toggle("hidden-modal");
  closeModalMenuLang();
});

const mainPage = document.querySelector("main");
mainPage.addEventListener("click", function () {
  modalCurrency.classList.add("hidden-modal");
  closeModalMenuLang();
});

// MODAL LANGUAGES
const modalLanguage = document.querySelector(".modal-language--container");
const btnLanguage = document.querySelector(".languages-btn");

btnLanguage.addEventListener("click", function () {
  modalLanguage.classList.toggle("hidden-modal");
  modalCurrency.classList.add("hidden-modal");
  modalMenu.classList.add("hidden-modal");
});

// MODAL MENU
const modalMenu = document.querySelector(".modal-menu--container");
const btnMenu = document.querySelector(".menu-btn");

btnMenu.addEventListener("click", function () {
  modalMenu.classList.toggle("hidden-modal");
  modalLanguage.classList.add("hidden-modal");
  modalCurrency.classList.add("hidden-modal");
});

// MODAL CHECK IN
const modalCheckIn = document.querySelector(".checkIn-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const btnCheckIn = document.querySelector(".checkIn-btn");
const btnCloseModal = document.querySelector(".close-modal");

const closeCheckInOverlay = function () {
  modalCheckIn.classList.add("hidden-modal--2");
  modalOverlay.classList.add("hidden-modal--2");
};

btnCheckIn.addEventListener("click", function () {
  modalCheckIn.classList.toggle("hidden-modal--2");
  modalOverlay.classList.toggle("hidden-modal--2");
  modalCurrency.classList.add("hidden-modal");
  closeModalMenuLang();
});

modalOverlay.addEventListener("click", function () {
  closeCheckInOverlay();
  closeLoginOverlay();
  closeSignupOverlay();
});

btnCloseModal.addEventListener("click", function () {
  closeCheckInOverlay();
});
// MODAL LOGIN
const modalLogin = document.querySelector(".login-modal");
const btnLogin = document.querySelector(".login-btn");
const btnCloseModal2 = document.querySelector(".close-modal--2");

const closeLoginOverlay = function () {
  modalLogin.classList.add("hidden-modal--2");
  modalOverlay.classList.add("hidden-modal--2");
};

btnLogin.addEventListener("click", function () {
  modalLogin.classList.toggle("hidden-modal--2");
  modalOverlay.classList.toggle("hidden-modal--2");
  modalCurrency.classList.add("hidden-modal");
  closeModalMenuLang();
});

btnCloseModal2.addEventListener("click", function () {
  closeLoginOverlay();
});

// MODAL SIGNUP
const modalSignup = document.querySelector(".signup-modal");
const btnSignup = document.querySelector(".signup-btn");
const btnCloseModal3 = document.querySelector(".close-modal--3");

const closeSignupOverlay = function () {
  modalSignup.classList.add("hidden-modal--2");
  modalOverlay.classList.add("hidden-modal--2");
};

btnSignup.addEventListener("click", function () {
  modalSignup.classList.toggle("hidden-modal--2");
  modalOverlay.classList.toggle("hidden-modal--2");
  modalCurrency.classList.add("hidden-modal");
  closeModalMenuLang();
});

btnCloseModal3.addEventListener("click", function () {
  modalSignup.classList.add("hidden-modal--2");
  modalOverlay.classList.add("hidden-modal--2");
});
