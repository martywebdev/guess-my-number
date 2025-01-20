"use strict"

const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

const modal = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal");

// Toggle modal visibility
const toggleModal = (show) => {
  modal.classList.toggle("hidden", !show);
  modal.classList.toggle("block", show);
};

// Handle show/hide actions
const handleShowModal = () => toggleModal(true);
const handleCloseModal = () => toggleModal(false);

const handleOutsideClick = (event) => {
  if (!modalContent.contains(event.target)) handleCloseModal();
};

// Initialize event listeners
const initializeModalEvents = () => {
  showModal.forEach((button) => button.addEventListener("click", handleShowModal));
  closeModal.addEventListener("click", handleCloseModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) handleCloseModal();
  });
  modal.addEventListener("click", handleOutsideClick);
};

// Initialize modal
initializeModalEvents();
