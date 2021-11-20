
const toggleModal = () => {
  const openModalBtn = document.querySelector('.profile-open')

  const modal = document.querySelector('.sidebar-modal-overlay')

  openModalBtn.addEventListener('click', () => {
    modal.classList.add('open')
  })

  modal.addEventListener('click', (e) => {
    let target = e.target
    target = target.closest('.sidebar-modal')

    if (!target) {
      modal.classList.remove('open')
    }
  
  })

}


export { toggleModal }
