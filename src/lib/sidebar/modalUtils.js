
const toggleModal = (trigger, overlay, modalClass) => {
  const modal = document.querySelector(modalClass)

  modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('close') ) {
      overlay.classList.remove('open')
    }
  })

  trigger.addEventListener('click', () => {
    overlay.classList.add('open')
  })

  overlay.addEventListener('click', (e) => {
    let target = e.target
    target = target.closest(modalClass)

    if (!target) {
      overlay.classList.remove('open')
    }
  
  })
}

export { toggleModal }
