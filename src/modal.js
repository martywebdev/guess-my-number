const showModal = document.querySelector('.show-modal')

const handleShowModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('hidden', 'translate-y-full'); // Remove hidden and off-screen position
    modal.classList.add('translate-y-100', 'duration-500');
}

showModal.addEventListener('click', handleShowModal)